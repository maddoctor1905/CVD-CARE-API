import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Otp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    phoneNumber: string;

    @Column({default: false})
    confirm: boolean;
}
