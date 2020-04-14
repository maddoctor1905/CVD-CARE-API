import {Body, Controller, Param, Post, Put} from '@nestjs/common';
import {OtpService} from './otp.service';

@Controller('otps')
export class OtpController {
    constructor(private readonly otpService: OtpService) {
    }

    @Post('')
    initOtpForAccount(@Body() body: { phoneNumber: string }) {
        return this.otpService.create(body.phoneNumber);
    }

    @Put(':code/confirm')
    confirmPendingOtp(@Body() body: { phoneNumber: string }, @Param('code') code: string) {
        return this.otpService.confirm(body.phoneNumber, code);
    }

}
