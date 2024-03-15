import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { AuthorRepository } from './repository/author.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService, AuthorRepository, PrismaService],
  exports:[AuthorService]
})
export class AuthorModule {}
