import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {FindManyOptions, FindOneOptions, Repository} from 'typeorm';
import {PatientInvestigation} from './patientInvestigation.entity';

@Injectable()
export class PatientInvestigationService {
    constructor(@InjectRepository(PatientInvestigation) private readonly patientInvestigationRepository: Repository<PatientInvestigation>) {
    }

    findOne(condition: FindOneOptions<PatientInvestigation>) {
        try {
            return this.patientInvestigationRepository.findOne(condition);
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    findMany(condition: FindManyOptions<PatientInvestigation>) {
        try {
            return this.patientInvestigationRepository.find(condition);
        } catch (e) {
            throw new BadRequestException(e);
        }
    }
}
