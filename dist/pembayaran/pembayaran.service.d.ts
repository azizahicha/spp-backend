import { Repository } from 'typeorm';
import { Pembayaran } from './pembayaran.entity';
export declare class PembayaranService {
    private repo;
    constructor(repo: Repository<Pembayaran>);
    findAll(): Promise<Pembayaran[]>;
    findBySiswa(siswaId: number): Promise<Pembayaran[]>;
    findOne(id: number): Promise<Pembayaran>;
    bayar(data: {
        siswaId: number;
        bulan: string;
        jumlah: number;
        keterangan?: string;
    }): Promise<Pembayaran>;
    update(id: number, data: Partial<Pembayaran>): Promise<Pembayaran>;
    remove(id: number): Promise<{
        message: string;
    }>;
    riwayat(siswaId: number): Promise<Pembayaran[]>;
}
