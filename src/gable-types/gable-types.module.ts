import { Module } from '@nestjs/common';
import { GableTypesService } from './gable-types.service';
import { GableTypesController } from './gable-types.controller';

@Module({
  controllers: [GableTypesController],
  providers: [GableTypesService]
})
export class GableTypesModule {}
