import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {

    @ApiProperty()
    @IsString()
    @IsOptional()
    nom: string


    
    @ApiProperty()
    @IsString()
    @IsOptional()
    prenom: string


    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string

    
    @ApiProperty()
    @IsString()
    @IsOptional()
    adresse: string

}
