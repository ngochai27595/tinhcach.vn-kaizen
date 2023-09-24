import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PdfsService } from './pdfs.service';
import { PdfsController } from './pdfs.controller';
import { Pdfs as PdfEntity } from './pdf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PdfEntity]), HttpModule],
  providers: [PdfsService],
  controllers: [PdfsController],
})
export class PdfsModule {}
