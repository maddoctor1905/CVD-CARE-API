import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity('dietsupmaster')
export class Diet {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({type: 'varchar', length: 30})
  DSPlanName: string;
  @Column({type: 'varchar', length: 30})
  KDSPlanName: string;
  @Column({type: 'text', default: null})
  DSPlanDescription: string;
  @Column({type: 'text', default: null})
  KDSPlanDescription: string;
}
