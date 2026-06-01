import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, SetMetadata, Request } from '@nestjs/common';
import { PembayaranService } from './pembayaran.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

@Controller('pembayaran')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PembayaranController {
  constructor(private service: PembayaranService) {}

  @Get()
  @SetMetadata('roles', ['admin'])
  findAll() { return this.service.findAll(); }

  @Get('saya')
  findSaya(@Request() req) {
    return this.service.findBySiswa(req.user.siswaId);
  }

  @Get('riwayat/:siswaId')
  @SetMetadata('roles', ['admin'])
  riwayat(@Param('siswaId') siswaId: string) {
    return this.service.riwayat(+siswaId);
  }

  @Get(':id')
  @SetMetadata('roles', ['admin'])
  findOne(@Param('id') id: string) { return this.service.findOne(+id); }

  @Post('bayar')
  @SetMetadata('roles', ['admin'])
  bayar(@Body() body: { siswaId: number; bulan: string; jumlah: number; keterangan?: string }) {
    return this.service.bayar(body);
  }

  @Put(':id')
  @SetMetadata('roles', ['admin'])
  update(@Param('id') id: string, @Body() body: any) {
    return this.service.update(+id, body);
  }

  @Delete(':id')
  @SetMetadata('roles', ['admin'])
  remove(@Param('id') id: string) { return this.service.remove(+id); }
}