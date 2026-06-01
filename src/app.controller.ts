import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getInfo() {
    return {
      message: 'SPP Backend API',
      version: '1.0',
      docs: '/api',
      endpoints: {
        auth: '/auth',
        siswa: '/siswa',
        pembayaran: '/pembayaran',
      },
    };
  }
}