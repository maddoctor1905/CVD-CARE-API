import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'investmaster'})
export class InvestigationMaster {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 30})
    InvMName: string;
    @Column({type: 'varchar', length: 30, default: null})
    KInvMName: string;
    @Column({type: 'varchar', length: 10, default: null})
    LOINCCode: string;
    @Column({type: 'text', default: null})
    Description: string;
    @Column({type: 'text', default: null})
    KDescription: string;
}
