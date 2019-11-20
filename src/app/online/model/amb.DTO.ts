import { IsString, IsNotEmpty } from 'class-validator';

export class AmbitoDTO {
    @IsNotEmpty()
    @IsString()
    ubiambito : string;
    @IsNotEmpty()
    @IsString()
    nombre : string;
    @IsNotEmpty()
    estado : number;
}