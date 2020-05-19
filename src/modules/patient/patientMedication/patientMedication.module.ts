import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PatientMedication} from './patientMedication.entity';
import {PatientMedicationService} from './patientMedication.service';
import {PatientMedicationController} from './patientMedication.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PatientMedication])],
  controllers: [PatientMedicationController],
  providers: [PatientMedicationService],
})
export class PatientMedicationModule {
}
