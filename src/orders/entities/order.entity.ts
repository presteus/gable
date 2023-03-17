import { ApiProperty } from "@nestjs/swagger";
import { GableComponent } from "src/gable-components/entities/gable-component.entity";
import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity('orders')
export class Order extends BaseEntity {

    @ApiProperty()
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;


    @ApiProperty()
    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date

    @ApiProperty()
    @UpdateDateColumn({ type: 'timestamptz', default: null })
    updated_at: Date;


    @ApiProperty()
    @Column({ type: 'money' })
    total_price: number


    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    
    @ManyToMany(() => GableComponent, (components) => components.id)
    @JoinTable()
    components: GableComponent




}
