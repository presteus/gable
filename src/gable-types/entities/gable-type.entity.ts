import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Composant } from "src/gable-components/entities/gable-component.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('types')
export class Type extends BaseEntity {

    @ApiProperty()
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @ApiProperty()
    @Column({ type: 'varchar' })

    name: string


    @OneToMany(type => Composant, (components) => components.types)
    components: Composant[];



}
