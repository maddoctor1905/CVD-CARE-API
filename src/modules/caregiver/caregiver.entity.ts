import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('caregiver')
export class Caregiver {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({type: 'varchar', length: 30})
  CGName: string;
  @Column({type: 'varchar', length: 30})
  KCGName: string;
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

  @Column({type: 'varchar', length: 40, default: null})
  KDepartment: string;
}
