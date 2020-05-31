import {Controller, Get, Param} from '@nestjs/common';
import {PatientRecruitmentService} from './patientRecruitment.service';

@Controller('/patients/:id/recruitments')
export class PatientRecruitmentController {
  constructor(private readonly patientRecruitmentService: PatientRecruitmentService) {
  }

  @Get()
  findManyByPatientId(@Param('id') patientId: number) {
    return this.patientRecruitmentService.findMany({
      where: {Patient: patientId},
      relations: ['Patient', 'Doctor', 'Diet', 'Exercise'],
    });
  }
}
