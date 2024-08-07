import { IsString, IsUUID, IsDecimal } from 'class-validator';

export class CreateProductDto {
    
      @IsUUID()
      id: string;
    
      @IsString()
      name: string;
    
      @IsUUID()
      marcaId: string;
    
      @IsUUID()
      modeloId: string;
    
      @IsString()
      descripcion: string;
    
      @IsString()
      photo: string;
    
      @IsDecimal({ decimal_digits: '2', locale: 'en-US' })
      price: number;
    }
    