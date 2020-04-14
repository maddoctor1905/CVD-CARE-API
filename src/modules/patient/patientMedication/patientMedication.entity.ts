import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';
import {Patient} from '../patient.entity';
import {MedicationMaster} from '../../medication/medicationMaster.entity';

@Entity({name: 'patientmedication'})
export class PatientMedication {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;
    @ManyToOne(type => Patient)
    @JoinColumn({name: ''})
    Patient: Patient;
    @Column({type: 'varchar', length: 20, default: null})
    PrescId: string;
    @ManyToOne(type => MedicationMaster)
    @JoinColumn()
    Medication: number;
    @Column({type: 'date', default: null})
    MedicatonDate: string;
    @Column({type: 'date', default: null})
    ValidFromDate: string;
    @Column({type: 'date', default: null})
    ValidToDate: string;
    @Column({type: 'enum', default: null, enum: ['1-0-0', '0-1-0', '0-0-1', '1-1-0', '1-0-1', '0-1-1', '1-1-1', 'Evening', 'Bedtime', null]})
    MedicationTime: string;
    @Column({type: 'int', default: null})
    Strength: number;
    @Column({type: 'enum', enum: ['mg', 'ml', null], default: null})
    Unit: string;
    @Column({type: 'enum', enum: ['Oral', 'Injection', null], default: null})
    Route: string;
    @Column({type: 'enum', enum: ['ಮೌಖಿಕ', 'ಚುಚ್ಚುಮದ್ದು', null], default: null})
    KRoute: string;

}
