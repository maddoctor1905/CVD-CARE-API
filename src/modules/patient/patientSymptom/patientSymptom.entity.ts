import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Patient} from '../patient.entity';
import {MedicationCondition} from '../../symptoms/symptom.entity';

@Entity('patientmedsymptrack')
export class PatientSymptom {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(type => Patient)
  @JoinColumn()
  Patient: Patient;

  @ManyToOne(type => MedicationCondition)
  @JoinColumn()
  MedicationCondition: MedicationCondition;

  @Column({type: 'date'})
  STDate: string;
  @Column({type: 'text', default: null})
  STDescription: string;
  @Column({type: 'text', default: null})
  KSTDescription: string;
}
