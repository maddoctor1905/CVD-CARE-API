import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {PatientRecruitment} from './patientRecruitment.entity';
import {FindManyOptions, FindOneOptions, Repository} from 'typeorm';

@Injectable()
export class PatientRecruitmentService {
  constructor(@InjectRepository(PatientRecruitment)
              private readonly patientRecruitmentRepository: Repository<PatientRecruitment>) {
  }

  findOne(condition: FindOneOptions<PatientRecruitment>) {
    try {
      return this.patientRecruitmentRepository.findOne(condition);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  findMany(condition: FindManyOptions<PatientRecruitment>) {
    try {
      return this.patientRecruitmentRepository.find(condition);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
