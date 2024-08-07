// crud.service.ts

import { ReturnDto } from "../dto";
import { DeleteDto } from "../dto/delete.dto";
import { SearchManyDto } from "../dto/search.many.dto";

export interface CrudService<TCreateDto, TUpdateDto> {
    create(createDto: TCreateDto): Promise<ReturnDto>;
    search(searchDto: SearchManyDto): Promise<ReturnDto>;
    update(updateDto: TUpdateDto): Promise<ReturnDto>;
    remove(deleteDto: DeleteDto): Promise<ReturnDto>;
  }
  