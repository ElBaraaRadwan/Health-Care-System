import { Module } from '@nestjs/common';
import { UserManagementController } from './user-management.controller';
import { UserManagementService } from './user-management.service';
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
              groupId: 'user-producer',
            },
          },
        },
      ]),
    ],
  controllers: [UserManagementController],
  providers: [UserManagementService],
})
export class UserManagementModule {}
