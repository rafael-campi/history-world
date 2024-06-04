import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhraseModule } from './phrase/phrase.module';
import { AuthorModule } from './author/author.module';
import { KafkaModule } from './kafka/kafka.module';
import { KafkaController } from './kafka/kafka.controller';
import { KafkaService } from './kafka/kafka.service';

@Module({
  imports: [PhraseModule, AuthorModule, KafkaModule],
  controllers: [AppController, KafkaController],
  providers: [AppService, KafkaService],
})
export class AppModule {}
