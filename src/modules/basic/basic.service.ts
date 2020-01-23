import {Injectable} from '@nestjs/common';
import {EnvironmentService} from '@enoviah/nest-core';

@Injectable()
export class BasicService {
    constructor(private readonly env: EnvironmentService<{ test: string }>) {
        // tslint:disable-next-line:no-console
        console.log(env.environment.test);
    }

    basic(): string {
        return 'A basic function';
    }

}
