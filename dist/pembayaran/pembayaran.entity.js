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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pembayaran = exports.StatusPembayaran = void 0;
const typeorm_1 = require("typeorm");
const siswa_entity_1 = require("../siswa/siswa.entity");
var StatusPembayaran;
(function (StatusPembayaran) {
    StatusPembayaran["LUNAS"] = "lunas";
    StatusPembayaran["BELUM_LUNAS"] = "belum_lunas";
})(StatusPembayaran || (exports.StatusPembayaran = StatusPembayaran = {}));
let Pembayaran = class Pembayaran {
};
exports.Pembayaran = Pembayaran;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pembayaran.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => siswa_entity_1.Siswa, (s) => s.pembayaran, { eager: true }),
    __metadata("design:type", siswa_entity_1.Siswa)
], Pembayaran.prototype, "siswa", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pembayaran.prototype, "siswaId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pembayaran.prototype, "bulan", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Pembayaran.prototype, "jumlah", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: StatusPembayaran, default: StatusPembayaran.BELUM_LUNAS }),
    __metadata("design:type", String)
], Pembayaran.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Pembayaran.prototype, "keterangan", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Pembayaran.prototype, "tanggal", void 0);
exports.Pembayaran = Pembayaran = __decorate([
    (0, typeorm_1.Entity)('pembayaran')
], Pembayaran);
//# sourceMappingURL=pembayaran.entity.js.map