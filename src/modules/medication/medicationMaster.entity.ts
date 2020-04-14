import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'medicationmaster'})
export class MedicationMaster {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column({type: 'varchar', length: 30, default: null})
    BrandName: string;
    @Column({type: 'varchar', length: 30, default: null})
    KBrandName: string;
    @Column({type: 'varchar', length: 30, default: null})
    GenericDrugName: string;
    @Column({type: 'varchar', length: 30, default: null})
    KGenericDrugName: string;
    @Column({type: 'varchar', length: 10, default: null})
    RxNormCode: string;
}
