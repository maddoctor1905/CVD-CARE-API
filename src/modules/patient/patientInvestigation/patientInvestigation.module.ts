import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PatientInvestigation} from './patientInvestigation.entity';
import {PatientInvestigationService} from './patientInvestigation.service';
import {PatientInvestigationController} from './patientInvestigation.controller';

@Module({
    imports: [TypeOrmModule.forFeature([PatientInvestigation])],
    controllers: [PatientInvestigationController],
    providers: [PatientInvestigationService],
})
export class PatientInvestigationModule {
}
