import { CodeEnum } from 'src/common/enum/code.enum';
import { CrudDto, RelationalDto, ReturnDto } from '../dto';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { KindEnum } from 'src/common/enum/kind.enum';
import { ClassValidator } from '../validator/class.validator';
import { ValidateScenarioDto } from '../dto/validate.scenario.dto';
import { ResourceEnum } from '../../enum/resource.enum';
import { MethodEnum } from 'src/common/enum/method.enum';
import { SearchDto } from '../dto/search.dto';
import { fieldsEnum } from 'src/common/enum/fields.enum';
import { ConditionDto } from '../dto/condition.dto';
import { LogicalOperators } from '../utils/Builder/enum';
import { StructDto } from '../utils/Builder/class/struct.dto';
import { SearchFieldDto } from '../utils/Builder/class/fields.dto';
import { TypeOf } from './typeOf.class';
import { EnumTypeOf } from 'src/common/enum/typeOf.enum';
import { BaseDto } from '../dto/base.crud.dto';
import { DeleteDto } from '../dto/delete.dto';
import { TrazaService } from 'src/trazas/trazas.service';
import { TrazaController } from 'src/trazas/trazas.controller';
import { Traza } from 'src/trazas/entities/traza.entity';
import { SearchManyDto } from '../dto/search.many.dto';
import { ComparisonType } from 'src/common/enum/comparison.type.enum';
import { ConditionSearchDto } from '../dto/condition.search.dto';
import { RelationSelectDto } from '../dto/relation.search.dto';
import { SortOrder } from 'src/common/enum/sort.order.enum';
import { OrderDto } from '../dto/order.dto';

export class BaseServiceCRUD<TEntity,createDto extends BaseDto,updateDto extends BaseDto> {
  private dto: CrudDto;
  private returnDto: ReturnDto;
  private valid: boolean;
  private queryBuilder: SelectQueryBuilder<TEntity>;

  constructor(
    repo: Repository<TEntity>,
    ) {
    this.dto = new CrudDto();
    this.dto.repo = repo;
    this.returnDto = new ReturnDto();
  }

  async create(createDto: createDto): Promise<ReturnDto> {
    if (createDto.rules) {
      this.valid = await this._validate(createDto);
    }
    else{
      this.valid = true
    }
    if (this.valid) {
      try {
        this.returnDto.data = await this.dto.repo.save(createDto);
      } catch (error) {
        this.returnDto.isSuccess = false;
        this.returnDto.errorMessage =  error.message ;
        this.returnDto.returnCode = error.code;
      }
    } else {
      this.returnDto.isSuccess = false;
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
      this.returnDto.errorMessage = ResourceEnum.ALREADY_EXST;
    }
    return this.returnDto;
  }
  async update(updateDto: updateDto): Promise<ReturnDto> {
    this.dto.id = updateDto.id;
    if (updateDto.rules) {
      this.valid = await this._validate(updateDto);
    }
    else{
      this.valid = true
    }
    if (this.valid) {
      try {
        const object = await this.dto.repo.findOne({
          where: {
            id: this.dto.id,
          },
        });
        if (!object) {
          this.returnDto.isSuccess = false;
          this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
          // traducir
          this.returnDto.errorMessage = '';
        } else {
          // object.props(updateDto)
          this.returnDto.data = await this.dto.repo.save(updateDto);
        }
      } catch (error) {
        this.returnDto.isSuccess = false;
        this.returnDto.errorMessage = error.message ;
        this.returnDto.returnCode = error.code;
      }
    } else {
      this.returnDto.isSuccess = false;
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
      this.returnDto.errorMessage =  ResourceEnum.ALREADY_EXST ;
      // this.translate.translate(ResourceEnum.ALREADY_EXST,this.returnDto,createDto)
    }
    return this.returnDto;
  }

  async remove(deleteDto: DeleteDto): Promise<ReturnDto> {
    this.dto.id = deleteDto.id;
    const item = await this.dto.repo.findOne({
      where: {
        id: this.dto.id,
      },
    });
    if (!item) {
      this.returnDto.isSuccess = false;
      // traducir
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
      this.returnDto.errorMessage =   `the Item with id ${this.dto.id} do not exist`
    } else if (item.isUsed == true) {
      this.returnDto.isSuccess = false;
      // traducir
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
      this.returnDto.errorMessage =  `the Item with id ${this.dto.id} is in use`;
    } else {
      this.returnDto.data = await this.dto.repo.softDelete(this.dto.id);
    }
    return this.returnDto;
  }

  async search(searchDto: SearchManyDto): Promise<ReturnDto> {
    this.queryBuilder = this.dto.repo.createQueryBuilder(this.dto.repo.metadata.tableName);

    if (searchDto.queryType == fieldsEnum.ONE) {
      await this.findOne(searchDto)
    } else 
    if (searchDto.queryType == fieldsEnum.ALL) {
      await this.findAll(searchDto);
    } else {
      await this.findByCriteria(searchDto);
    }

    if(searchDto.queryType != fieldsEnum.ONE)
    {
      this.returnDto.data = this.sortJson(this.returnDto.data as any[],searchDto.orderBy)
    }
    return this.returnDto;
  }


private sortJson(data: any[], orderBy: OrderDto[]): any[] {
  return data.sort((a, b) => {
    for (const { field, order } of orderBy) {
      const [fieldPath, subField] = field.split('.');
      const aValue = subField ? a[fieldPath]?.[subField] : a[fieldPath];
      const bValue = subField ? b[fieldPath]?.[subField] : b[fieldPath];

      if (aValue < bValue) return order === 'ASC' ? -1 : 1;
      if (aValue > bValue) return order === 'ASC' ? 1 : -1;
    }
    return 0; // If all compared fields are equal
  });
}


  async findOne(searchDto: SearchManyDto) {
    
    const item = await this.dto.repo.findOne({
      where: {
        id:searchDto.id,
      },
    });
    if (!item) {
      this.returnDto.isSuccess = false;
      // traducir
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
    } else {
      this.returnDto.data = [item];
    }
  }

  async findAll(searchDto: SearchManyDto) {
    this.returnDto.data = await this.dto.repo.find({
      skip: this.startPage(searchDto.skip, searchDto.take),
      take: searchDto.take,
    });
  }

  async findByCriteria(searchDto: SearchManyDto) {


    this.addSelectFields(this.queryBuilder, searchDto.select);
    this.addWhereConditions(this.queryBuilder, searchDto.where);
    this.addRelations(this.queryBuilder, searchDto.relations);
    // this.addOrderBy(this.queryBuilder, searchDto.orderBy);


    if(searchDto.skip !== undefined && searchDto.take !== undefined){
      this.addPagination(searchDto)
    }
    else if (searchDto.skip !== undefined) {
      this.queryBuilder.skip(this.startPage(searchDto.skip, searchDto.take));
    }

    else if (searchDto.take !== undefined) {
      this.queryBuilder.take(searchDto.take);
    }

    this.returnDto.data = await this.queryBuilder.getMany();
  }

  private addSelectFields(queryBuilder: SelectQueryBuilder<any>, selectFields?: string[]) {
    if (selectFields && selectFields.length > 0) {
      queryBuilder.select(selectFields.map(field => `${queryBuilder.alias}.${field}`));
    }
  }

  private addWhereConditions(queryBuilder: SelectQueryBuilder<any>, whereConditions?: ConditionSearchDto[]) {
    if (whereConditions) {
      whereConditions.forEach(condition => {
        const { type, field, value, range } = condition;
        switch (type) {
          case ComparisonType.EQUAL:
            queryBuilder.andWhere(`${queryBuilder.alias}.${field} = :${field}`, { [field]: value });
            break;
          case ComparisonType.LIKE:
            queryBuilder.andWhere(`${queryBuilder.alias}.${field} LIKE :${field}`, { [field]: `%${value}%` });
            break;
          case ComparisonType.BIGGER_THAN:
            queryBuilder.andWhere(`${queryBuilder.alias}.${field} > :${field}`, { [field]: value });
            break;
          case ComparisonType.LESS_THAN:
            queryBuilder.andWhere(`${queryBuilder.alias}.${field} < :${field}`, { [field]: value });
            break;
          case ComparisonType.BETWEEN:
            if (range && range.length === 2) {
              queryBuilder.andWhere(`${queryBuilder.alias}.${field} BETWEEN :start AND :end`, {
                start: range[0],
                end: range[1]
              });
            }
            break;
          default:
            break;
        }
      });
    }
  }


  private addRelations(
    queryBuilder: SelectQueryBuilder<any>, 
    relations?: { [key: string]: RelationSelectDto }, 
    // mainEntity: string
  ) {
    const mainEntity  = this.dto.repo.metadata.tableName
    if (relations) {
      const joinedRelations = new Set<string>();
      const selectFields = new Set<string>();

      Object.keys(relations).forEach(relation => {
        const { select, where, orderBy } = relations[relation];
        const relationAlias = `${mainEntity}_${relation}`;

        // Avoid adding the same relation more than once
        if (!joinedRelations.has(relationAlias)) {
          if(where && where.length > 0)
          queryBuilder.leftJoinAndSelect(`${mainEntity}.${relation}`, relationAlias);
        else 
        queryBuilder.innerJoin(`${mainEntity}.${relation}`, relationAlias);
        joinedRelations.add(relationAlias);
        }

        // Add selected fields for the relation
        if (select && select.length > 0) {
          select.forEach(field => {
            const fieldAlias = `${relationAlias}.${field}`;
            if (!selectFields.has(fieldAlias)) {
              queryBuilder.addSelect(fieldAlias);
              selectFields.add(fieldAlias);
            }
          });
        }

        // Add where conditions for the relation
        if (where && where.length > 0) {
          where.forEach(condition => {
            const { type, field, value, range } = condition;
            switch (type) {
              case ComparisonType.EQUAL:
                queryBuilder.andWhere(`${relationAlias}.${field} = :${field}_rel`, { [`${field}_rel`]: value });
                break;
              case ComparisonType.LIKE:
                queryBuilder.andWhere(`${relationAlias}.${field} LIKE :${field}_rel`, { [`${field}_rel`]: `%${value}%` });
                break;
              case ComparisonType.BIGGER_THAN:
                queryBuilder.andWhere(`${relationAlias}.${field} > :${field}_rel`, { [`${field}_rel`]: value });
                break;
              case ComparisonType.LESS_THAN:
                queryBuilder.andWhere(`${relationAlias}.${field} < :${field}_rel`, { [`${field}_rel`]: value });
                break;
              case ComparisonType.BETWEEN:
                if (range && range.length === 2) {
                  queryBuilder.andWhere(`${relationAlias}.${field} BETWEEN :start_rel AND :end_rel`, {
                    start_rel: range[0],
                    end_rel: range[1]
                  });
                }
                break;
              default:
                break;
            }
          });
        }

        // Add order by fields for the relation
        // if (orderBy) {
        //   this.addOrderBy(queryBuilder,orderBy)
        // }
      });
    }
  }

  // private addOrderBy(queryBuilder: SelectQueryBuilder<any>, orderBy?: OrderDto[]) {
  //   if (orderBy && orderBy.length > 0) {
  //     orderBy.forEach(order => {
  //       queryBuilder.addOrderBy(`${order.field}`,`${order.order}`);
  //     });
  //   }
  // }

  private addPagination(searchDto: SearchManyDto) {
    this.queryBuilder
      .skip(this.startPage(searchDto.skip, searchDto.take))
      .take(searchDto.take);
  }
  private startPage(page: number, limit: number) {
    return page * limit;
  }


   async _validate(dto: BaseDto): Promise<boolean> {
    const rules = dto.rules;
    this.valid = true;
    if (rules.comparisonKind == KindEnum.UINQUE) {
      const scenarios = []; 
      rules.field.forEach((rule: string) => {
        const scenario = new ValidateScenarioDto();
        scenario.table = this.dto.repo.metadata.tableName;
        scenario.field = rule;
        scenario.value = dto[rule];
        scenarios.push(scenario);
      });
       const validated: ClassValidator = new ClassValidator();
      this.valid = await validated.validate(this.dto.repo, scenarios);
    }
    return this.valid;
  }

}
