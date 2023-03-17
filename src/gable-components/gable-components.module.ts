import { Module } from '@nestjs/common';
import { GableComponentsService } from './gable-components.service';
import { GableComponentsController } from './gable-components.controller';

@Module({
  controllers: [GableComponentsController],
  providers: [GableComponentsService]
})
export class GableComponentsModule {}
