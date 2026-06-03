import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, SetMetadata, Query } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { ApiBody, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('siswa')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SiswaController {
  constructor(private siswaService: SiswaService) {}

  @Get()
  @SetMetadata('roles', ['admin'])
  findAll() { return this.siswaService.findAll(); }

  @Get('search')
  @SetMetadata('roles', ['admin'])
  search(@Query('q') q: string) { return this.siswaService.search(q); }

  @Get(':id')
  @SetMetadata('roles', ['admin'])
  findOne(@Param('id') id: string) { return this.siswaService.findOne(+id); }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        nama: { type: 'string', example: 'Budi Santoso' },
        nis: { type: 'string', example: '12345' },
        kelas: { type: 'string', example: 'XII RPL 1' },
        alamat: { type: 'string', example: 'Jl. Contoh No. 1' },
      },
    },
  })
  @Post()
  @SetMetadata('roles', ['admin'])
  create(@Body() body: any) { return this.siswaService.create(body); }

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        nama: { type: 'string', example: 'Budi Santoso' },
        nis: { type: 'string', example: '12345' },
        kelas: { type: 'string', example: 'XII RPL 1' },
        alamat: { type: 'string', example: 'Jl. Contoh No. 1' },
      },
    },
  })
  @Put(':id')
  @SetMetadata('roles', ['admin'])
  update(@Param('id') id: string, @Body() body: any) { return this.siswaService.update(+id, body); }

  @Delete(':id')
  @SetMetadata('roles', ['admin'])
  remove(@Param('id') id: string) { return this.siswaService.remove(+id); }
}