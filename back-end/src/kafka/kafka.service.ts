// kafka.service.ts
import { Injectable } from '@nestjs/common';
import { Kafka, Producer, Consumer } from 'kafkajs';

@Injectable()
export class KafkaService {
  private kafka: Kafka;
  private producer: Producer;
  private consumer: Consumer;

  constructor() {
    this.kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092'],
    });
    this.producer = this.kafka.producer();
    this.consumer = this.kafka.consumer({ groupId: 'my-group' });
  }

  async sendMessage(topic: string, message: string) {
    await this.producer.send({
      topic,
      messages: [{ value: message }],
    });
  }

  async subscribe(topic: string, callback: (message: any) => void) {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic });
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        callback(JSON.parse(message.value.toString()));
      },
    });
  }

  async disconnect() {
    await this.producer.disconnect();
    await this.consumer.disconnect();
  }
}
