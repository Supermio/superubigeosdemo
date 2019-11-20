import { IsString, IsNotEmpty } from 'class-validator';

export class Level2DTO {
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
    level2s : DistDTO[];
}
export class DistDTO {
    @IsNotEmpty()
    @IsString()
    ubidist : string;
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
    superficie : number;
    y : number;
    x : number;
    capital : number; 
    @IsNotEmpty()
    @IsString()
    ubidep : string;
    @IsNotEmpty()
    @IsString()
    ubisunat : string;
    nombresunat : string;
    nombreinei : string;
    @IsNotEmpty()
    @IsString()
    IDTIPO2: string;
    @IsNotEmpty()
    @IsString()
    UBIPROV : string;
}