import { IsEnum, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  amount: number;

  @IsEnum(['cash', 'credit_card', 'insurance'])
  paymentMethod: 'cash' | 'credit_card' | 'insurance';

  @IsEnum(['pending', 'completed', 'failed'])
  status: 'pending' | 'completed' | 'failed';

  @IsNotEmpty()
  userId: number; // The user making the payment
}
