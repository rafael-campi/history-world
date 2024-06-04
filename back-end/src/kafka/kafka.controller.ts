// kafka.controller.ts
import { Controller, Post, Body, OnModuleDestroy } from '@nestjs/common';
import { KafkaService } from './kafka.service';

@Controller('kafka')
export class KafkaController implements OnModuleDestroy {
  constructor(private readonly kafkaService: KafkaService) {}

  @Post('send')
  async sendMessage(@Body() data: any) {
    await this.kafkaService.sendMessage('my-topic', JSON.stringify(data));
    return { success: true };
  }

  async onModuleDestroy() {
    await this.kafkaService.disconnect();
  }
}
