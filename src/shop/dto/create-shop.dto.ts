import { IsString, IsUUID, IsNumber, IsOptional } from 'class-validator';

export class CreateShopDto {
      @IsUUID()
      @IsOptional() 
      id?: string;
    
      @IsString()
      name: string;
    
      @IsString()
      description: string;
    
      @IsNumber()
      longitud: number;
    
      @IsNumber()
      latitud: number;
    
      @IsString()
      phone: string;
    
      @IsString()
      email: string;
    
      @IsString()
      address: string;
    
      @IsUUID()
      municipalityId: string;
    }
    