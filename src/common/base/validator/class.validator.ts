import { Repository } from 'typeorm';
import { ValidateScenarioDto } from '../dto/validate.scenario.dto';

export class ClassValidator {
  async validate(
    repo: Repository<any>,
    scenarios: ValidateScenarioDto[],
  ): Promise<boolean> {
    const query = repo.createQueryBuilder(repo.metadata.tableName);
    
    let valid = true;
     scenarios.forEach((scenario) => {
      if (typeof scenario.value === 'string') {
        query.andWhere(
          `${scenario.table}.${scenario.field} = '${scenario.value}'`,
        );
      }
    });
    const result = await query.getMany();

    if (result.length) {
      valid = false;
    }
    return valid;
  }
}
