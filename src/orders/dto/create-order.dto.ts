import { ArrayNotEmpty, IsArray} from "class-validator";
import { ApiProperty } from "@nestjs/swagger"


export class CreateOrderDto {


    @ApiProperty()
    @IsArray()
    @ArrayNotEmpty()
    componentId: number[];
}
