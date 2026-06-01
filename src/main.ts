import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // Tambahkan ini

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  // --- TAMBAHKAN BLOK INI ---
  const config = new DocumentBuilder()
    .setTitle('API SPP Sekolah')
    .setDescription('Dokumentasi API untuk sistem pembayaran SPP')
    .setVersion('1.0')
    .addBearerAuth() // Jika pakai JWT
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Ini yang bikin path /api jadi ada isinya
  // --------------------------

  await app.listen(process.env.PORT || 3000, '0.0.0.0');
}
bootstrap();

// pancing deploy
