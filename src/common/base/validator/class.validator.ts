import { Repository } from 'typeorm';
import { ValidateScenarioDto } from '../dto/validate.scenario.dto';
import { TypeOf } from '../class/typeOf.class';

export class ClassValidator {
  async validate(
    repo: Repository<any>,
    scenarios: ValidateScenarioDto[],
  ): Promise<boolean> {
    const query = repo.createQueryBuilder(repo.metadata.tableName);

    let valid = true;
     scenarios.forEach((scenario) => {
      if (scenario.value instanceof Object) {
        query.andWhere(
          `${scenario.table}.${scenario.field}->>'es' = '${scenario.value['es']}'`,
        );
        query.orWhere(
          `${scenario.table}.${scenario.field}->>'en' = '${scenario.value['en']}'`,
        );
      } else if ((scenario.value as any) instanceof String) {
        query.andWhere(
          `${scenario.table}.${scenario.field} = ${scenario.value}`,
        );
      }
    });
    const result = await query.getCount();
    if (result) {
      valid = false;
    }
    return valid;
  }
}
