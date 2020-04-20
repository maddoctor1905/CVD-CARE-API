import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, PrimaryColumn} from 'typeorm';
import {Otp} from '../otp/otp.entity';

@Entity()
export class Patient {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'varchar', length: 30})
    PatName: string;

    @Column({type: 'bigint'})
    MobileNo: number;

    @Column({default: null, type: 'bigint'})
    AltMobileNo?: number;

    @Column({default: null, type: 'varchar', length: 40})
    Email: string;

    @Column({default: null, type: 'text'})
    Address: string;
    @Column({default: null, type: 'text'})
    KAddress?: string;

    @Column({default: null, type: 'varchar', length: 30})
    City: string;

    @Column({default: null, type: 'varchar', length: 30})
    KCity: string;

    @Column({default: null, type: 'bigint'})
    Pincode: number;

    @Column({default: null, type: 'varchar', length: 30})
    Location: string;

    @Column({default: null, type: 'varchar', length: 30})
    KLocation: string;

    @Column({default: null, type: 'varchar', length: 30})
    FCGName: string;

    @Column({default: null, type: 'varchar', length: 30})
    KFCGName: string;

    @Column({default: null, type: 'varchar', length: 40})
    FCGEmail: string;

    @Column({default: null, type: 'bigint'})
    FCGMNO1?: number;

    @Column({default: null, type: 'bigint'})
    FCGMNO2?: number;

    @Column({default: null, type: 'varchar', length: 30})
    Relationship: string;

    @Column({default: null, type: 'tinyint'})
    IsOwnPhone: number;

    @Column({default: null, type: 'tinyint'})
    IsSmartPhone: number;

    @Column({default: null, type: 'int'})
    CGId: number;

    @Column({default: null, type: 'varchar', length: 30})
    PatDesc: string;

    @Column({default: 0, type: 'tinyint'})
    Registered: number;
}
