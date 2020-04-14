import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {FindManyOptions, FindOneOptions, Repository} from 'typeorm';
import {PatientMedication} from './patientMedication.entity';

@Injectable()
export class PatientMedicationService {
    constructor(@InjectRepository(PatientMedication) private readonly patientMedicationRepository: Repository<PatientMedication>) {
    }

    findOne(condition: FindOneOptions<PatientMedication>) {
        try {
            return this.patientMedicationRepository.findOne(condition);
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    findMany(condition: FindManyOptions<PatientMedication>) {
        try {
            return this.patientMedicationRepository.find(condition);
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

}
