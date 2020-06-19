import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {MedicationCondition} from './symptom.entity';
import {Repository} from 'typeorm';

@Injectable()
export class SymptomService {
  constructor(@InjectRepository(MedicationCondition) private readonly medicationConditionRepository: Repository<MedicationCondition>) {
  }

  find(cond) {
    return this.medicationConditionRepository.find(cond);
  }

  findOneById(id: number) {
    return this.medicationConditionRepository.findOne({where: {id}});
  }
}
