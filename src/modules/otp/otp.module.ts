import {Module} from '@nestjs/common';
import {OtpService} from './otp.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Otp} from './otp.entity';
import {PatientModule} from '../patient/patient.module';
import {OtpController} from './otp.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Otp]), PatientModule],
    controllers: [OtpController],
    providers: [OtpService],
    exports: [OtpService],
})
export class OtpModule {
}
