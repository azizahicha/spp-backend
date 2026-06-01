import { SiswaService } from './siswa.service';
export declare class SiswaController {
    private siswaService;
    constructor(siswaService: SiswaService);
    findAll(): Promise<import("./siswa.entity").Siswa[]>;
    findOne(id: string): Promise<import("./siswa.entity").Siswa>;
    create(body: any): Promise<import("./siswa.entity").Siswa>;
    update(id: string, body: any): Promise<import("./siswa.entity").Siswa>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
