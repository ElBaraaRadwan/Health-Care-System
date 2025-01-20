import { Module } from '@nestjs/common';
import { PharmacyController } from './pharmacy.controller';
import { PharmacyService } from './pharmacy.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
      ClientsModule.register([
        {
          name: 'KAFKA_CLIENT',
          transport: Transport.KAFKA,
          options: {
            client: {
              brokers: ['localhost:9092'],
            },
            consumer: {
              groupId: 'pharmacy-producer',
            },
          },
        },
      ]),
    ],
  controllers: [PharmacyController],
  providers: [PharmacyService],
})
export class PharmacyModule {}
