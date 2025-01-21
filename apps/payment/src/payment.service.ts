import { Injectable } from '@nestjs/common';
import { Payment } from 'libs/shared/entities';

@Injectable()
export class PaymentService {
  constructor() {}

  async createPayment(payment: any) {
    console.log('Creating payment...');
    return payment;
  }

  async updatePayment(payment: any) {
    console.log('Updating payment...');
    return payment;
  }

  async deletePayment(payment: any) {
    console.log('Deleting payment...');
    return payment;
  }

  async getPayment(payment: any) {
    console.log('Getting payment...');
    return payment;
  }

  async getAllPayments() {
    console.log('Getting payments...');
    return [];
  }

  async getPaymentBy(Arg: any) {
    console.log(`Getting payments by ${Arg}...`);
    return Arg;
  }
}
