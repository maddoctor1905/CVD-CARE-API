import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn} from 'typeorm';
import {Patient} from '../patient.entity';
import {Doctor} from '../../doctor/doctor.entity';
import {Diet} from '../../diet/diet.entity';
import {Exercise} from '../../exercise/exercise.entity';

@Entity('patientrecruitment')
export class PatientRecruitment {
  @PrimaryColumn()
  id: number;

  @OneToOne(type => Patient)
  @JoinColumn()
  Patient: Patient;

  @Column({type: 'date'})
  SurveyDate: string;

  @Column({type: 'date', default: null})
  LastDVisitDate: string;

  @ManyToOne(type => Doctor, {nullable: true})
  @JoinColumn()
  Doctor: Doctor;

  @Column({type: 'text', default: null})
  PhyDiagnosis: string;

  @Column({type: 'text', default: null})
  PhyComplianceAdvice: string;

  @Column({type: 'text', default: null})
  PhyMedicationAdvice: string;

  @Column({
    type: 'enum',
    enum: ['Monthly', 'Weekly', 'Daily', 'Fortnightly', '2 Months', '3 Months', '6 Months', 'Yearly'],
  })
  DVisitFrequency: string;

  @Column({
    type: 'enum',
    enum: ['ಮಾಸಿಕ', 'ಸಾಪ್ತಾಹಿಕ', 'ದೈನಂದಿನ', 'ಹದಿನೈದು ದಿನಗಳು', '2 ತಿಂಗಳು', '3 ತಿಂಗಳು', '6 ತಿಂಗಳ', 'ವಾರ್ಷಿಕ', null],
    default: null,
  })
  KDVisitFrequency: string;

  @Column({type: 'float', precision: 2, default: null})
  Weight: number;

  @Column({
    type: 'enum',
    enum: ['kgs', 'pds', null],
    default: null,
  })
  WUnitID: string;

  @Column({type: 'float', precision: 2, default: null})
  Height: number;

  @Column({
    type: 'enum',
    enum: ['cms', 'ft', null],
    default: null,
  })
  HUnitID: string;

  @Column({type: 'float', precision: 2, default: null})
  WaistCircum: number;

  @Column({type: 'int'})
  WCUnitID: number;

  @Column({
    type: 'enum',
    enum: ['cms', 'inc', null],
    default: null,
  })
  WaistHipRatio: string;

  @Column({type: 'int', default: null})
  HeartRate: number;

  @Column({type: 'int', default: null})
  RespiratoryRate: number;

  @Column({type: 'int', default: null})
  BPSystolic: number;

  @Column({type: 'int', default: null})
  BPDiastolic: number;

  @Column({
    type: 'enum',
    enum: ['Very Active', 'Active', 'Sedentry', 'In Active'],
  })
  PhysicalActivity: string;

  @Column({
    type: 'enum',
    enum: ['ಬಹಳ ಸಕ್ರಿಯ', 'ಸಕ್ರಿಯ', 'ಜಡ', 'ನಿಷ್ಕ್ರಿಯ', null],
    default: null,
  })
  KPhysicalActivity: string;

  @Column({
    type: 'enum',
    enum: ['Regular', 'Irregular'],
  })
  MenstrualStatus: string;

  @Column({
    type: 'enum',
    enum: ['ನಿಯಮಿತ', 'ಅನಿಯಮಿತ', null],
    default: null,
  })
  KMenstrualStatus: string;

  @Column({type: 'text', default: null})
  SurgicalHistory: string;

  @Column({type: 'text', default: null})
  KSurgicalHistory: string;

  @Column({type: 'date', default: null})
  SurgeryDate: string;

  @ManyToOne(type => Diet)
  @JoinColumn()
  Diet: Diet;

  @ManyToOne(type => Exercise)
  @JoinColumn()
  Exercise: Exercise;
}
