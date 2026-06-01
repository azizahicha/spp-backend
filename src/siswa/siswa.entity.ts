import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pembayaran } from '../pembayaran/pembayaran.entity';

@Entity('siswa')
export class Siswa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nama: string;

  @Column({ unique: true })
  nis: string;

  @Column()
  kelas: string;

  @Column()
  alamat: string;

  @OneToMany(() => Pembayaran, (p) => p.siswa)
  pembayaran: Pembayaran[];
}