import { IsString, IsNotEmpty } from 'class-validator';

export class Level0DTO {
    @IsNotEmpty()
    @IsString()
    ubiambito: string;
    @IsNotEmpty()
    @IsString()
    nombre: string;
    @IsNotEmpty()    
    estado: number;
    level0s: DepDTO[];
}
export class DepDTO {
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
}