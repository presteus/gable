import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { RamCapacite } from "../enum/capacite.enum";
import { GCFormat } from "../enum/format.enum";
import { RamFrequence } from "../enum/frequence.enum";

export class CreateGableComponentDto {


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string


    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string


    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number


    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    marque: string


    @ApiProperty()
    @IsString()
    chipset: string


    @ApiProperty()
    @IsString()
    socket: string


    @ApiProperty()
    @IsEnum({ type: 'enum', enum: GCFormat })
    format_cm: GCFormat


    @ApiProperty()
    @IsNumber()
    slot_nvme: number


    @ApiProperty()
    @IsNumber()
    slot_sata: number


    @ApiProperty()
    @IsNumber()
    ram_number: number


    @ApiProperty()
    @IsEnum({ type: 'enum', enum: RamFrequence })
    ram_frequence: RamFrequence


    @ApiProperty()
    @IsEnum({ type: 'enum', enum: RamCapacite })
    ram_capacite: RamCapacite


    @ApiProperty()
    @IsEnum({ type: 'enum', enum: GCFormat })
    format_alim: GCFormat


    @ApiProperty()
    @IsEnum({ type: 'enum', enum: GCFormat })
    format_boitier: GCFormat


    @ApiProperty()
    @IsNumber()
    ssd_nvme: number


    @ApiProperty()
    @IsNumber()
    ssd_sata: number


    @ApiProperty()
    @IsNumber()
    hdd_sata: number

    @ApiProperty()
    @IsNumber()
    pci: number


}
