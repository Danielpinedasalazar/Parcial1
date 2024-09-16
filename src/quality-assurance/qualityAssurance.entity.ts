
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QualityAssurance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  verificationType: string;

  @Column()
  verificationDate: Date;

  @Column()
  results: string;
}