import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhraseModule } from './phrase/phrase.module';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [PhraseModule, AuthorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
