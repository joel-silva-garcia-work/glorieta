import { CodeEnum } from 'src/common/enum/code.enum';

export class ReturnDto {
  isSuccess: boolean = true;
  returnCode: number = CodeEnum.OK;
  data?: Object;
  errorMessage?: string;
}
