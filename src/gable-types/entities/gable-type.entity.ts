import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity('types')
export class GableType extends BaseEntity {

    @ApiProperty()
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @ApiProperty()
    @Column({ type: 'varchar' })
    
    name: string


    /*   @OneToMany(() => GableComponent, (components) => components.types)
      components: GableComponent; */



}
