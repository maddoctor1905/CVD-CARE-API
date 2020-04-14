import {Module} from '@nestjs/common';
import {EnoNestCoreModule} from '@enoviah/nest-core';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Patient} from './modules/patient/patient.entity';
import {PatientModule} from './modules/patient/patient.module';
import {PatientMedication} from './modules/patient/patientMedication/patientMedication.entity';
import {MedicationMaster} from './modules/medication/medicationMaster.entity';
import {PatientInvestigation} from './modules/patient/patientInvestigation/patientInvestigation.entity';
import {InvestigationMaster} from './modules/investigation/investigationMaster.entity';
import {Otp} from './modules/otp/otp.entity';
import {OtpModule} from './modules/otp/otp.module';
import {environment} from './environment/env';

@Module({
    imports: [EnoNestCoreModule, TypeOrmModule.forRoot({
        type: 'mysql',
        host: environment.environment.MYSQL_ADDRESS,
        port: +environment.environment.MYSQL_PORT,
        username: environment.environment.MYSQL_USER ,
        password: environment.environment.MYSQL_PASSWORD,
        database: environment.environment.MYSQL_DATABASE,
        entities: [Patient, PatientMedication, MedicationMaster, PatientInvestigation, InvestigationMaster, Otp],
        synchronize: true,
    }), PatientModule, OtpModule],
    controllers: [],
    providers: [],
})
export class AppModule {
}
