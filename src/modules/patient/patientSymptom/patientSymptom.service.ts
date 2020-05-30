import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {PatientSymptom} from './patientSymptom.entity';
import {FindManyOptions, Repository} from 'typeorm';
import {PatientService} from '../patient.service';
import {SymptomService} from '../../symptoms/symptom.service';

@Injectable()
export class PatientSymptomService {
  constructor(@InjectRepository(PatientSymptom) private readonly patientSymptomRepository: Repository<PatientSymptom>,
              private readonly patientService: PatientService, private readonly symptomService: SymptomService) {
  }

  findMany(condition: FindManyOptions<PatientSymptom>) {
    try {
      return this.patientSymptomRepository.find(condition);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  async insert(patientId: string, symptomId: number, date: string, description: string) {
    const patient = await this.patientService.findOne({where: {id: +patientId}});
    const symptom = await this.symptomService.findOneById(symptomId);
    const patientSymptom = new PatientSymptom();
    patientSymptom.Patient = patient;
    patientSymptom.MedicationCondition = symptom;
    patientSymptom.STDate = date;
    patientSymptom.STDescription = description;
    await this.patientSymptomRepository.save(patientSymptom);
    return patientSymptom;
  }
}
