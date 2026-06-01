import { Siswa } from '../siswa/siswa.entity';
export declare enum StatusPembayaran {
    LUNAS = "lunas",
    BELUM_LUNAS = "belum_lunas"
}
export declare class Pembayaran {
    id: number;
    siswa: Siswa;
    siswaId: number;
    bulan: string;
    jumlah: number;
    status: StatusPembayaran;
    keterangan: string;
    tanggal: Date;
}
