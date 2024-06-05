import { Controller, Post, Body, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Controller('kafka')
export class KafkaController implements OnModuleInit, OnModuleDestroy {
  constructor(private readonly kafkaService: KafkaService) {}

  async onModuleInit() {
    await this.kafkaService.onModuleInit();
  }

  @Post('send')
  async sendMessage(@Body() data: any) {
    await this.kafkaService.sendMessage('my-topic', JSON.stringify(data));
    return { success: true };
  }

  async onModuleDestroy() {
    await this.kafkaService.onModuleDestroy();
  }
}
