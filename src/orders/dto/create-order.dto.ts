import { IsDate, IsNotEmpty, IsNumber, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"

export class CreateOrderDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    created_at: Date;


    @ApiProperty()
    @IsOptional()
    @IsDate()
    updated_at: Date;

}
