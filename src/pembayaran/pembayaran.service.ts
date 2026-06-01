import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pembayaran, StatusPembayaran } from './pembayaran.entity';

@Injectable()
export class PembayaranService {
  constructor(@InjectRepository(Pembayaran) private repo: Repository<Pembayaran>) {}

  findAll() { return this.repo.find({ relations: { siswa: true } }); }

  findBySiswa(siswaId: number) {
    return this.repo.find({ where: { siswaId }, relations: { siswa: true } });
  }

  async findOne(id: number) {
    const p = await this.repo.findOne({ where: { id }, relations: { siswa: true } });
    if (!p) throw new NotFoundException('Pembayaran tidak ditemukan');
    return p;
  }

  async bayar(data: { siswaId: number; bulan: string; jumlah: number; keterangan?: string }) {
    const pembayaran = this.repo.create({
      ...data,
      status: StatusPembayaran.LUNAS,
    });
    return this.repo.save(pembayaran);
  }

  async update(id: number, data: Partial<Pembayaran>) {
    await this.findOne(id);
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.repo.delete(id);
    return { message: 'Pembayaran berhasil dihapus' };
  }

  async riwayat(siswaId: number) {
    return this.repo.find({
      where: { siswaId },
      order: { tanggal: 'DESC' },
      relations: { siswa: true },
    });
  }
}