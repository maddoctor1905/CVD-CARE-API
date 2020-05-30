import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {SymptomController} from './symptom.controller';
import {SymptomService} from './symptom.service';
import {MedicationCondition} from './symptom.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicationCondition])],
  controllers: [SymptomController],
  providers: [SymptomService],
  exports: [SymptomService],
})
export class SymptomsModule {
}
