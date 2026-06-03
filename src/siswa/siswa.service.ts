import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Siswa } from './siswa.entity';

@Injectable()
export class SiswaService {
  constructor(@InjectRepository(Siswa) private siswaRepo: Repository<Siswa>) {}

  findAll() { return this.siswaRepo.find(); }

  async findOne(id: number) {
    const s = await this.siswaRepo.findOne({ where: { id } });
    if (!s) throw new NotFoundException('Siswa tidak ditemukan');
    return s;
  }

  async search(q: string) {
    return this.siswaRepo.find({
      where: [
        { nama: Like(`%${q}%`) },
        { nis: Like(`%${q}%`) },
      ],
    });
  }

  create(data: Partial<Siswa>) { return this.siswaRepo.save(this.siswaRepo.create(data)); }

  async update(id: number, data: Partial<Siswa>) {
    await this.findOne(id);
    await this.siswaRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.siswaRepo.delete(id);
    return { message: 'Siswa berhasil dihapus' };
  }
}