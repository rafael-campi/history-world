import { Module } from '@nestjs/common';
import { PhraseService } from './phrase.service';
import { PhraseController } from './phrase.controller';
import { PhraseRepository } from './repository/phrase.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PhraseController],
  providers: [PhraseService, PhraseRepository, PrismaService],
  exports: [PhraseService]
})
export class PhraseModule {}
