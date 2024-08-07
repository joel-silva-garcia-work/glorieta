import { Body, Delete, Get, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ReturnDto } from '../dto';
import { SearchDto } from '../dto/search.dto';
import { CrudService } from '../interfaces/crud.service';
import { ApiOperation, ApiResponse, ApiBadRequestResponse, ApiQuery, ApiBody } from '@nestjs/swagger';
import { DTOAnnotation } from '../dto/dto.annotation';
import { DeleteDto } from '../dto/delete.dto';
import { SearchManyDto } from '../dto/search.many.dto';
 
export class BaseControllerCRUD<TCreateDto, TUpdateDto
, TService extends CrudService<TCreateDto, TUpdateDto>>
 {
  
  constructor(private readonly service: TService) {
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo elemento' })
  @ApiResponse({ status: 201, description: 'El elemento ha sido creado con éxito.', type: ReturnDto })
  @ApiBadRequestResponse({ description: 'Error de validación o datos incorrectos.' })
  @ApiBody({ type: new DTOAnnotation<TCreateDto>('createDto' as TCreateDto) as any, description: 'Datos para crear un nuevo elemento.' })
  create(@Body(new ValidationPipe({ transform: true })) createDto: TCreateDto):Promise<ReturnDto>{
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar elementos' })
  @ApiResponse({ status: 200, description: 'Lista de elementos encontrados.', type: ReturnDto })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Número de página para paginación.' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Cantidad de elementos por página.' })
  async find(@Body() searchDto: SearchManyDto):Promise<ReturnDto> {
    return this.service.search(searchDto);
  }

  @Patch()
  @ApiOperation({ summary: 'Actualizar un elemento existente' })
  @ApiResponse({ status: 200, description: 'El elemento ha sido actualizado con éxito.', type: ReturnDto })
  @ApiBadRequestResponse({ description: 'Error de validación o datos incorrectos.' })
  @ApiBody({ type: new DTOAnnotation<TUpdateDto>('updateDto' as TUpdateDto) as any, description: 'Datos para actualizar un elemento existente.' })
  update( @Body(new ValidationPipe({ transform: true })) updateDto: TUpdateDto):Promise<ReturnDto>{
    console
    return this.service.update(updateDto);
  }

  @Delete()
  @ApiOperation({ summary: 'Eliminar un elemento por ID' })
  @ApiResponse({ status: 200, description: 'El elemento ha sido eliminado con éxito.', type: ReturnDto })
  @ApiBadRequestResponse({ description: 'Error de validación o datos incorrectos.' })
  @ApiBody({ type: DeleteDto, description: 'ID del elemento a eliminar.' })
   remove( @Body() deleteDto: DeleteDto):Promise<ReturnDto> {
    return this.service.remove(deleteDto);
  }  
}
