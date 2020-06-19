import {Body, Controller, Get, Param, Put, Query} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';
import {PatientService} from './patient.service';

@Controller('patients')
@ApiUseTags('Patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {
  }

  @Get('')
  findOneByQuery(@Query() query: any) {
    return this.patientService.findMany({where: query});
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.patientService.findOne({where: {id}, relations: ['Caregiver']});
  }

  @Put(':id')
  updatePatient(@Param('id') id: string, @Body() body: any) {
    return this.patientService.updateOne({where: {id: +id}}, body);
  }

}
