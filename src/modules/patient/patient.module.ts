import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Patient} from './patient.entity';
import {PatientService} from './patient.service';
import {PatientMedicationModule} from './patientMedication/patientMedication.module';
import {PatientInvestigationModule} from './patientInvestigation/patientInvestigation.module';
import {PatientController} from './patient.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Patient]), PatientMedicationModule, PatientInvestigationModule],
    controllers: [PatientController],
    providers: [PatientService],
    exports: [PatientService],
})
export class PatientModule {
}
