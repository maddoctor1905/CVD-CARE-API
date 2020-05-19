import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PatientRecruitment} from './patientRecruitment.entity';
import {PatientRecruitmentService} from './patientRecruitment.service';
import {PatientRecruitmentController} from './PatientRecruitment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PatientRecruitment])],
  controllers: [PatientRecruitmentController],
  providers: [PatientRecruitmentService],
})
export class PatientRecruitmentModule {
}
