export interface BaseDto {
  id?: string;
  [key: string]: any; // Index signature for accepting any other properties
}

