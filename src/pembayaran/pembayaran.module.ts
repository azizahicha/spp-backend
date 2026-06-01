import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pembayaran } from './pembayaran.entity';
import { PembayaranService } from './pembayaran.service';
import { PembayaranController } from './pembayaran.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pembayaran])],
  providers: [PembayaranService],
  controllers: [PembayaranController],
})
export class PembayaranModule {}