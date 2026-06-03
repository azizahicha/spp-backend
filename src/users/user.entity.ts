import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Siswa } from '../siswa/siswa.entity';

export enum UserRole {
  ADMIN = 'admin',
  SISWA = 'siswa',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.SISWA })
  role: UserRole;

  @Column({ nullable: true })
  siswaId: number;

  @ManyToOne(() => Siswa, { nullable: true, eager: false })
  @JoinColumn({ name: 'siswaId' })
  siswa: Siswa;
}