import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Relocation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  risk: string;

  @Column()
  details: string;
}