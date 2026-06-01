import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, SetMetadata } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';

@Controller('siswa')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SiswaController {
  constructor(private siswaService: SiswaService) {}

  @Get()
  @SetMetadata('roles', ['admin'])
  findAll() { return this.siswaService.findAll(); }

  @Get(':id')
  @SetMetadata('roles', ['admin'])
  findOne(@Param('id') id: string) { return this.siswaService.findOne(+id); }

  @Post()
  @SetMetadata('roles', ['admin'])
  create(@Body() body: any) { return this.siswaService.create(body); }

  @Put(':id')
  @SetMetadata('roles', ['admin'])
  update(@Param('id') id: string, @Body() body: any) { return this.siswaService.update(+id, body); }

  @Delete(':id')
  @SetMetadata('roles', ['admin'])
  remove(@Param('id') id: string) { return this.siswaService.remove(+id); }
}