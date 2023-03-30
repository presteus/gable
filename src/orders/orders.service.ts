import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {
  async create(createOrderDto: CreateOrderDto): Promise<Order | null> {
    const order = new Order()
    order.created_at = createOrderDto.created_at
    await order.save()
    return order
  }



  async findAll(): Promise<Order[] | null> {
    return await Order.find({
      relations: { user: true }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
