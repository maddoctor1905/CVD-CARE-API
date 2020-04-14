import {Controller, Get, Param} from '@nestjs/common';
import {ApiUseTags} from '@nestjs/swagger';
import {PatientInvestigationService} from './patientInvestigation.service';

@Controller('patients/:id/investigations')
@ApiUseTags('Investigations')
export class PatientInvestigationController {
    constructor(private readonly patientInvestigationService: PatientInvestigationService) {
    }

    @Get()
    findManyByPatientId(@Param('id') patientId: number) {
        return this.patientInvestigationService.findMany({where: {Patient: patientId}, relations: ['Investigation']});
    }
}
