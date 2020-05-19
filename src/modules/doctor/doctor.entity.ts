import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('doctor')
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 30})
  DName: string;

  @Column({type: 'varchar', length: 30, default: null})
  KDName: string;

  @Column({type: 'bigint'})
  MobileNo: number;

  @Column({type: 'bigint', default: null})
  AltMobileNo: number;

  @Column({type: 'varchar', length: 40, default: null})
  Email: string;

  @Column({type: 'enum', enum: ['M', 'F', 'T']})
  Gender: string;

  @Column({type: 'varchar', length: 30, default: null})
  Department: string;
  @Column({type: 'varchar', length: 30, default: null})
  KDepartment: string;

  @Column({type: 'varchar', length: 30, default: null})
  Specialization: string;

  @Column({type: 'varchar', length: 30, default: null})
  KSpecialization: string;

  @Column({type: 'varchar', length: 30, default: null})
  HospitalNameAdd: string;

  @Column({type: 'varchar', length: 30, default: null})
  KHospitalNameAdd: string;
}
