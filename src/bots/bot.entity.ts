import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bots')
export class BotEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;
}
