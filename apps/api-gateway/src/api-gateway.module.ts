import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Pharmacy, Appointment, Payment } from 'libs/shared/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'healthcare_system',
      entities: [User, Pharmacy, Payment, Appointment],
      synchronize: true, // Automatically sync schema (disable in production)
    }),
    TypeOrmModule.forFeature([User, Pharmacy, Payment, Appointment]), // Register entities in the module
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule {}
