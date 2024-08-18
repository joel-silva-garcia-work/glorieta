import { IsString, IsIn } from 'class-validator';

export class OrderByFieldDto {
  @IsString()
  field: string;

  @IsIn(['ASC', 'DESC'])
  direction: 'ASC' | 'DESC';
}