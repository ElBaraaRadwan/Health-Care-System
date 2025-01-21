import { Controller } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreatePaymentDto, UpdatePaymentDto } from 'libs/shared/DTOs';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @MessagePattern('create-payment')
  async createPayment(payment: CreatePaymentDto) {
    return this.paymentService.createPayment(payment);
  }

  @MessagePattern('update-payment')
  async updatePayment(payment: UpdatePaymentDto) {
    return this.paymentService.updatePayment(payment);
  }

  @MessagePattern('delete-payment')
  async deletePayment(paymentID: number) {
    return this.paymentService.deletePayment(paymentID);
  }

  @MessagePattern('get-payment')
  async getPayment(paymentID: any) {
    return this.paymentService.getPayment(paymentID);
  }

  @MessagePattern('get-all-payments')
  async getAllPayments() {
    return this.paymentService.getAllPayments();
  }

  @MessagePattern('get-payment-by')
  async getPaymentBy(Arg: any) {
    return this.paymentService.getPaymentBy(Arg);
  }

  @EventPattern('payment.created')
  async handlePaymentCreated(payment: any) {
    console.log('Payment created event received:', payment);
    // Further event-specific logic
  }
}
