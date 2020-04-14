import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Patient} from './patient.entity';
import {FindManyOptions, FindOneOptions, Repository} from 'typeorm';
import {FindConditions} from 'typeorm/find-options/FindConditions';

@Injectable()
export class PatientService {
    constructor(@InjectRepository(Patient) private readonly patientRepository: Repository<Patient>) {
    }

    public async findMany(condition: FindOneOptions<Patient>) {
        if ((condition.where as FindConditions<Patient>).MobileNo) {
            (condition.where as FindConditions<Patient>).MobileNo = +(condition.where as FindConditions<Patient>).MobileNo;
        }
        try {
            return await this.patientRepository.find({
                ...condition,
            });
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    public async findOne(condition: FindOneOptions<Patient>) {
        try {
            return await this.patientRepository.findOne({
                ...condition,
            });
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    public async updateOne(finder: FindOneOptions<Patient>, newPatient: Partial<Patient>) {
        const patient = await this.findOne({where: finder});
        if (!patient) {
            throw new BadRequestException('Cannot find patient to update');
        }
        for (const key of Object.keys(newPatient)) {
            patient[key] = newPatient[key];
        }
        try {
            return await this.patientRepository.save(patient);
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

}
