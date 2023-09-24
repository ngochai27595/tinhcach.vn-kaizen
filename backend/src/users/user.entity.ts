import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryColumn({ length: 36 })
  id: string;

  @Column()
  is_active: boolean;
}
