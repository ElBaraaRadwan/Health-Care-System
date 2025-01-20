import { NestFactory } from '@nestjs/core';
import { AppointmentModule } from './appointment.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppointmentModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'appointment-consumer',
        },
      },
    },
  );

  await app.listen();
  console.log('Appointment Service is listening...');
}
bootstrap();
