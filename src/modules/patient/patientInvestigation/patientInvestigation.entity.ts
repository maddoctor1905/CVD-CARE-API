import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {Patient} from '../patient.entity';
import {InvestigationMaster} from '../../investigation/investigationMaster.entity';

@Entity({name: 'patientinvordered'})
export class PatientInvestigation {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Patient)
    @JoinColumn()
    Patient: Patient;

    @Column({type: 'varchar', default: null, length: 20})
    PrescId: number;

    @Column({type: 'date', default: null})
    STDate: string;

    @ManyToOne(type => InvestigationMaster)
    @JoinColumn()
    Investigation: InvestigationMaster;
    @Column({type: 'enum', enum: ['Monthly', 'Weekly', 'Daily', 'Forynightly', '2 Months', '3 Months', '6 Months', 'Yearly']})
    Frequency: string;
    @Column({
        type: 'enum',
        enum: ['ಮಾಸಿಕ', 'ಸಾಪ್ತಾಹಿಕ', 'ದೈನಂದಿನ', 'ಹದಿನೈದು ದಿನಗಳು', '2 ತಿಂಗಳು', '3 ತಿಂಗಳು', '6 ತಿಂಗಳ', 'ವಾರ್ಷಿಕ', null],
        default: null,
    })
    KFrequency: string;
}
