import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { Siswa } from '../siswa/siswa.entity';

export enum StatusPembayaran {
  LUNAS = 'lunas',
  BELUM_LUNAS = 'belum_lunas',
}

@Entity('pembayaran')
export class Pembayaran {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Siswa, (s) => s.pembayaran, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'siswaId' })
  siswa: Siswa;

  @Column()
  siswaId: number;

  @Column()
  bulan: string;

  @Column('decimal', { precision: 10, scale: 2 })
  jumlah: number;

  @Column({ type: 'enum', enum: StatusPembayaran, default: StatusPembayaran.BELUM_LUNAS })
  status: StatusPembayaran;

  @Column({ nullable: true })
  keterangan: string;

  @CreateDateColumn()
  tanggal: Date;
}