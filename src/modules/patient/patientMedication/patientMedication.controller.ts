import {Controller, Get, Param} from '@nestjs/common';
import {PatientMedicationService} from './patientMedication.service';

@Controller('/patients/:id/medications')
export class PatientMedicationController {

    constructor(private readonly patientMedicationService: PatientMedicationService) {
    }

    @Get()
    findManyByPatientId(@Param('id') patientId: number) {
        return this.patientMedicationService.findMany({where: {Patient: patientId}, relations: ['Medication']});
    }
}
