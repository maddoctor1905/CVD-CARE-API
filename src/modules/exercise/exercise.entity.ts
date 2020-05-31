import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('exlsmmaster')
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 30})
  ELPlanName: string;

  @Column({type: 'varchar', length: 30})
  KELPlanName: string;
  @Column({type: 'text', default: null})
  ELPlanDescription: string;
  @Column({type: 'text', default: null})
  KELPlanDescription;
}
