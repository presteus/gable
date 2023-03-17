import { ApiProperty } from "@nestjs/swagger";
import { GableType } from "src/gable-types/entities/gable-type.entity";
import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RamCapacite } from "../enum/capacite.enum";
import { GCFormat } from "../enum/format.enum";
import { RamFrequence } from "../enum/frequence.enum";




@Entity('components')
export class GableComponent extends BaseEntity {

    @ApiProperty()
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;


    @ApiProperty()
    @Column({ type: 'varchar' })
    name: string


    @ApiProperty()
    @Column({ type: 'varchar' })
    description: string


    @ApiProperty()
    @Column({ type: 'money' })
    price: number


    @ApiProperty()
    @Column({ type: 'varchar' })
    marque: string



    @ApiProperty()
    @Column({ type: 'varchar' })
    chipset: string


    @ApiProperty()
    @Column({ type: 'varchar' })
    socket: string



    @ApiProperty()
    @Column({ type: 'enum', enum: GCFormat })
    format_cm: GCFormat


    @ApiProperty()
    @Column({ type: 'number' })
    slot_nvme: number


    @ApiProperty()
    @Column({ type: 'number' })
    slot_sata: number


    @ApiProperty()
    @Column({ type: 'number' })
    ram_number: number


    @ApiProperty()
    @Column({ type: 'enum', enum: RamFrequence })
    ram_frequence: RamFrequence


    @ApiProperty()
    @Column({ type: 'enum', enum: RamCapacite })
    ram_capacite: RamCapacite


    @ApiProperty()
    @Column({ type: 'enum', enum: GCFormat })
    format_alim: GCFormat


    @ApiProperty()
    @Column({ type: 'enum', enum: GCFormat })
    format_boitier: GCFormat


    @ApiProperty()
    @Column({ type: 'number' })
    ssd_nvme: number


    @ApiProperty()
    @Column({ type: 'number' })
    ssd_sata: number


    @ApiProperty()
    @Column({ type: 'number' })
    hdd_sata: number


    @ApiProperty()
    @Column({ type: 'number' })
    pci: number


    @ManyToOne(() => GableType, (types) => types.id)

    types: number

}
