import {forwardRef, Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PatientSymptom} from './patientSymptom.entity';
import {PatientSymptomController} from './patientSymptom.controller';
import {PatientSymptomService} from './patientSymptom.service';
import {SymptomsModule} from '../../symptoms/symptoms.module';
import {PatientModule} from '../patient.module';

@Module({
  imports: [TypeOrmModule.forFeature([PatientSymptom]), SymptomsModule, forwardRef(() => PatientModule)],
  controllers: [PatientSymptomController],
  providers: [PatientSymptomService],
})
export class PatientSymptomModule {
}
