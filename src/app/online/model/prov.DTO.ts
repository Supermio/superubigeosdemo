import { IsString, IsNotEmpty } from 'class-validator';

export class Level1DTO {
  @IsNotEmpty()
  @IsString()
  ubidep : string;
  @IsNotEmpty()
  @IsString()
  ubigeo : string;
  @IsNotEmpty()
  @IsString()
  nombre : string;
  @IsNotEmpty()
  @IsString()
  ubiinei : string;
  @IsNotEmpty()
  estado : number;
  @IsNotEmpty()
  @IsString()
  ubisunat : string;
  @IsNotEmpty()
  @IsString()
  nombresunat : string;
  @IsNotEmpty()
  @IsString()
  nombreinei : string;
  @IsNotEmpty()
  @IsString()
  IDTIPO0 : string;
  @IsNotEmpty()
  @IsString()
  UBIAMBITO : string;
  level1s: ProvDTO[];
}
export class ProvDTO {
  @IsNotEmpty()
  @IsString()
  ubiprov : string;
  @IsNotEmpty()
  @IsString()
  ubigeo : string;
  @IsNotEmpty()
  @IsString()
  nombre : string;
  @IsNotEmpty()
  @IsString()
  ubiinei : string;
  @IsNotEmpty()
  estado : number;
  @IsString()
  ubisunat : string;
  @IsString()
  nombresunat : string;
  @IsString()
  nombreinei : string;
  @IsNotEmpty()
  @IsString()
  IDTIPO1 : string;
  @IsNotEmpty()
  @IsString()
  UBIDEP : string;
}