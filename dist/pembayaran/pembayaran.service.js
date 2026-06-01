"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PembayaranService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pembayaran_entity_1 = require("./pembayaran.entity");
let PembayaranService = class PembayaranService {
    constructor(repo) {
        this.repo = repo;
    }
    findAll() { return this.repo.find({ relations: { siswa: true } }); }
    findBySiswa(siswaId) {
        return this.repo.find({ where: { siswaId }, relations: { siswa: true } });
    }
    async findOne(id) {
        const p = await this.repo.findOne({ where: { id }, relations: { siswa: true } });
        if (!p)
            throw new common_1.NotFoundException('Pembayaran tidak ditemukan');
        return p;
    }
    async bayar(data) {
        const pembayaran = this.repo.create({
            ...data,
            status: pembayaran_entity_1.StatusPembayaran.LUNAS,
        });
        return this.repo.save(pembayaran);
    }
    async update(id, data) {
        await this.findOne(id);
        await this.repo.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.repo.delete(id);
        return { message: 'Pembayaran berhasil dihapus' };
    }
    async riwayat(siswaId) {
        return this.repo.find({
            where: { siswaId },
            order: { tanggal: 'DESC' },
            relations: { siswa: true },
        });
    }
};
exports.PembayaranService = PembayaranService;
exports.PembayaranService = PembayaranService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pembayaran_entity_1.Pembayaran)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PembayaranService);
//# sourceMappingURL=pembayaran.service.js.map