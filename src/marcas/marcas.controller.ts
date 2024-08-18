import {
  Body,
  Controller, Get, Render, Req,



  Post,


  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';

import { MarcasService } from './marcas.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { ApiTags } from '@nestjs/swagger';
import { BaseControllerCRUD } from 'src/common/base/class/base.controller.crud.class';
import { MarcasSearchDto } from './dto/marcas-search.dto';
import { ReturnDto } from 'src/common/base/dto';
import { openFormDto } from './dto/open-form.dto';

@ApiTags('Marcas')
@Controller('marcas')
 
export class MarcasController extends BaseControllerCRUD<CreateMarcaDto,UpdateMarcaDto,MarcasService>{
  constructor(private readonly Service: MarcasService) {
    super(Service)
  }  
  // @Get('/nuevo')
  // @Render('marcas/nuevo') // Renderiza la vista 'listar.ejs'
  // async openForm(
  //   @Req() request: Request,
  //   @Body() openform: openFormDto) 
  //     :Promise<any> {
  //     const csrfToken = request.csrfToken(); // Genera el token CSRF

  //   const marca = await this.Service.openForm(openform);
  //   return {marca, csrfToken } ;
  // }

  @Get('/listar')
  // @Render('marcas/listar') // Renderiza la vista 'listar.ejs'
  async findAll(@Body() searchDto: MarcasSearchDto):Promise<any> {
    const marcas = await this.Service.findItems(searchDto);
    return {marcas} ;
  }

  @Get('items')
  async findItems(@Body() searchDto: MarcasSearchDto): Promise<ReturnDto> {
    return this.Service.findItems(searchDto) ;
  }
}
