import {Controller, Get, Param, Query} from '@nestjs/common';
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
        return this.patientService.findOne({where: {id}});
    }

}
