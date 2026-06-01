import { PembayaranService } from './pembayaran.service';
export declare class PembayaranController {
    private service;
    constructor(service: PembayaranService);
    findAll(): Promise<import("./pembayaran.entity").Pembayaran[]>;
    findSaya(req: any): Promise<import("./pembayaran.entity").Pembayaran[]>;
    riwayat(siswaId: string): Promise<import("./pembayaran.entity").Pembayaran[]>;
    findOne(id: string): Promise<import("./pembayaran.entity").Pembayaran>;
    bayar(body: {
        siswaId: number;
        bulan: string;
        jumlah: number;
        keterangan?: string;
    }): Promise<import("./pembayaran.entity").Pembayaran>;
    update(id: string, body: any): Promise<import("./pembayaran.entity").Pembayaran>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
