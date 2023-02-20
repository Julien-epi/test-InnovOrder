import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import * as bcrypt from 'bcrypt';
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  firstname: string;

  @Column({
    nullable: false,
  })
  lastname: string;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @BeforeInsert()
  async hashPassword(){
    this.password = await bcrypt.hash(this.password, 8)
  }

  async comparePassword(password: string): Promise<boolean> { 
    return bcrypt.compare(password, this.password);
  }
}