import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity('medcondmaster')
export class MedicationCondition {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({type: 'varchar', length: 50})
  CondName: string;
  @Column({type: 'varchar', length: 30, default: null})
  KCondName: string;
  @Column({type: 'varchar', length: 10, default: null})
  ICDCode: string;
  @Column({type: 'enum', enum: ['Medical Condition', 'Syndrome', 'Symptom']})
  Type: string;
  @Column({type: 'text', default: null})
  ICDDescription: string;
  @Column({type: 'text', default: null})
  KICDDescription: string;
}
