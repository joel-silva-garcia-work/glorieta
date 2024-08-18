import { CodeEnum } from 'src/common/enum/code.enum';
import { CrudDto, ReturnDto } from '../dto';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { KindEnum } from 'src/common/enum/kind.enum';
import { ClassValidator } from '../validator/class.validator';
import { ValidateScenarioDto } from '../dto/validate.scenario.dto';
import { ResourceEnum } from '../../enum/resource.enum';
import { fieldsEnum } from 'src/common/enum/fields.enum';
import { BaseDto } from '../dto/base.crud.dto';
import { DeleteDto } from '../dto/delete.dto';
import { SearchManyDto } from '../dto/search.many.dto';
import { ComparisonType } from 'src/common/enum/comparison.type.enum';
import { ConditionSearchDto } from '../dto/condition.search.dto';
import { RelationSelectDto } from '../dto/relation.search.dto';

export class BaseServiceCRUD<
  TEntity,
  createDto extends BaseDto,
  updateDto extends BaseDto,
> {
  private dto: CrudDto;
  private returnDto: ReturnDto;
  private valid: boolean;
  private queryBuilder: SelectQueryBuilder<TEntity>;

  constructor(repo: Repository<TEntity>) {
    this.dto = new CrudDto();
    this.dto.repo = repo;
    this.returnDto = new ReturnDto();
  }

  async create(createDto: createDto): Promise<ReturnDto> {
    if (createDto.rules) {
      this.valid = await this._validate(createDto);
    } else {
      this.valid = true;
    }
    if (this.valid) {
      try {
        this.returnDto.data = await this.dto.repo.save(createDto);
      } catch (error) {
        this.returnDto.isSuccess = false;
        this.returnDto.errorMessage = error.message;
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
    } else {
      this.valid = true;
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
        this.returnDto.errorMessage = error.message;
        this.returnDto.returnCode = error.code;
      }
    } else {
      this.returnDto.isSuccess = false;
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
      this.returnDto.errorMessage = ResourceEnum.ALREADY_EXST;
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
      this.returnDto.errorMessage = `the Item with id ${this.dto.id} do not exist`;
    } else if (item.isUsed == true) {
      this.returnDto.isSuccess = false;
      // traducir
      this.returnDto.returnCode = CodeEnum.BAD_REQUEST;
      this.returnDto.errorMessage = `the Item with id ${this.dto.id} is in use`;
    } else {
      this.returnDto.data = await this.dto.repo.softDelete(this.dto.id);
    }
    return this.returnDto;
  }

  async search(searchDto: SearchManyDto): Promise<ReturnDto> {
    this.queryBuilder = this.dto.repo.createQueryBuilder(
      this.dto.repo.metadata.tableName,
    );

    if (searchDto.queryType == fieldsEnum.ONE) {
      await this.findOne(searchDto);
    } else if (searchDto.queryType == fieldsEnum.ALL) {
      await this.findAll(searchDto);
    } 

    return this.returnDto;
  }

  async findOne(searchDto: SearchManyDto) {
    const item = await this.dto.repo.findOne({
      where: {
        id: searchDto.id,
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



  protected addPagination(searchDto: SearchManyDto) {
    this.queryBuilder
      .skip(this.startPage(searchDto.skip, searchDto.take))
      .take(searchDto.take);
  }
  protected startPage(page: number, limit: number) {
    return page * limit;
  }

  async _validate(dto: BaseDto): Promise<boolean> {
    const rules = dto.rules;
    this.valid = true;
    if (rules.comparisonKind == KindEnum.UINQUE) {
      const scenarios = [];
      rules.field.forEach(rule => {
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
