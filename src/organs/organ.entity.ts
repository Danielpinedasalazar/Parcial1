
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organ {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  status: string;

  @Column()
  price: number;
}