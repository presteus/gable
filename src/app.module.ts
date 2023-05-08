import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { GableComponentsModule } from './gable-components/gable-components.module';
import { GableTypesModule } from './gable-types/gable-types.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Order } from './orders/entities/order.entity';
import { Composant } from './gable-components/entities/gable-component.entity';
import { Type } from './gable-types/entities/gable-type.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ssl:true,
      type: 'postgres',
      logging: true,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT!),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        User,
        Order,
        Composant,
        Type
      ],
      synchronize: false,
    }),
    UsersModule,
    OrdersModule,
    GableComponentsModule,
    GableTypesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
