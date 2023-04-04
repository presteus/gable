import { ArrayNotEmpty, IsArray, IsDate, IsNotEmpty, IsOptional } from "class-validator";
import { ApiProperty } from "@nestjs/swagger"
import { Composant } from "src/gable-components/entities/gable-component.entity";

export class CreateOrderDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    created_at: Date;


    @ApiProperty()
    @IsOptional()
    @IsDate()
    updated_at: Date;


    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    componentId: number[];
}
