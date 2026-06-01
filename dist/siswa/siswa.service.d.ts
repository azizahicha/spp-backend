import { Repository } from 'typeorm';
import { Siswa } from './siswa.entity';
export declare class SiswaService {
    private siswaRepo;
    constructor(siswaRepo: Repository<Siswa>);
    findAll(): Promise<Siswa[]>;
    findOne(id: number): Promise<Siswa>;
    create(data: Partial<Siswa>): Promise<Siswa>;
    update(id: number, data: Partial<Siswa>): Promise<Siswa>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
