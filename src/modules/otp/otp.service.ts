import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {FindOneOptions, Repository} from 'typeorm';
import {Otp} from './otp.entity';
import {PatientService} from '../patient/patient.service';

@Injectable()
export class OtpService {
    constructor(@InjectRepository(Otp) private readonly otpRepository: Repository<Otp>, private readonly patientService: PatientService) {
    }

    async create(phoneNumber: string) {
        const patient = await this.patientService.findOne({where: {MobileNo: phoneNumber}});
        if (!patient) {
            throw new BadRequestException('Patient number not registered');
        }
        const oldOtp = await this.otpRepository.findOne({where: {MobileNo: phoneNumber}});
        if (oldOtp) {
            oldOtp.code = this.generateRandomNumber();
            return this.otpRepository.save(oldOtp);
        }
        const otp = new Otp();
        otp.code = this.generateRandomNumber();
        otp.phoneNumber = phoneNumber;
        otp.confirm = false;
        if (patient.Registered) {
            await this.patientService.updateOne({where: {MobileNo: phoneNumber}}, {Registered: 0});
        }
        return await this.otpRepository.save<Otp>(otp);
    }

    public async findOne(condition: FindOneOptions<Otp>) {
        try {
            return await this.otpRepository.findOne(condition);
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    async confirm(phoneNumber: string, code: string) {
        let otp;
        try {
            otp = await this.findOne({where: {phoneNumber}});
        } catch (e) {
            throw new BadRequestException(e);
        }
        if (!otp) {
            throw new BadRequestException('Cannot find otp');
        }
        if (otp.code !== code) {
            throw new BadRequestException('OTP does not match');
        }
        try {
            await this.patientService.updateOne({where: {MobileNo: phoneNumber}}, {Registered: 1});
            await this.otpRepository.delete({phoneNumber});
        } catch (e) {
            throw new BadRequestException(e);
        }
    }

    private generateRandomNumber(length = 4): string {
        let code = '';
        for (let a = 0; a < length; a++) {
            code += `${Math.floor((Math.random() * 10))}`;
        }
        return code;
    }

}
