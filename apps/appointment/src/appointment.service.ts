import { Injectable } from '@nestjs/common';
import { Appointment } from 'libs/shared/entities';

@Injectable()
export class AppointmentService {
  constructor() {}

  async createAppointment(appointment: any) {
    console.log('Creating appointment...');
    return appointment;
  }

  async updateAppointment(appointment: any) {
    console.log('Updating appointment...');
    return appointment;
  }

  async deleteAppointment(appointment: any) {
    console.log('Deleting appointment...');
    return appointment;
  }

  async getAppointment(appointment: any) {
    console.log('Getting appointment...');
    return appointment;
  }

  async getAllAppointments() {
    console.log('Getting appointments...');
    return [];
  }

  async getAppointmentBy(Arg: any) {
    console.log(`Getting appointments by ${Arg}...`);
    return Arg;
  }
}
