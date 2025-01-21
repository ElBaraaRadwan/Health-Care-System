import { Module } from '@nestjs/common';
import { UserController } from './user-management.controller';
import { UserService } from './user-management.service';
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
  controllers: [UserController],
  providers: [UserService],
})
export class UserManagementModule {}
