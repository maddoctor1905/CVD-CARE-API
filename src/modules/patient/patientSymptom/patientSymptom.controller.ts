import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {PatientSymptomService} from './patientSymptom.service';

@Controller('/patients/:id/symptoms')
export class PatientSymptomController {
  constructor(private readonly patientSymptomService: PatientSymptomService) {
  }

  @Get()
  find(@Param('id') id: string) {
    return this.patientSymptomService.findMany({where: {Patient: id}, relations: ['Patient', 'MedicationCondition']});
  }

  @Post()
  create(@Param('id') id: string, @Body() body: any) {
    return this.patientSymptomService.insert(id, body.symptomId, body.date, body.description);
  }
}
