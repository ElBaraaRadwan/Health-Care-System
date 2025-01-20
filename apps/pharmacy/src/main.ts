import { NestFactory } from '@nestjs/core';
import { PharmacyModule } from './pharmacy.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PharmacyModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'pharmacy-consumer',
        },
      },
    },
  );

  await app.listen();
  console.log('Pharmacy Service is listening...');
}
bootstrap();
