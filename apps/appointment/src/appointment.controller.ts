import { Body, Controller } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @MessagePattern('create-appointment')
  async createAppointment(@Body() appointment: any) {
    return this.appointmentService.createAppointment(appointment);
  }

  @EventPattern('update-appointment')
  async updateAppointment(appointment: any) {
    return this.appointmentService.updateAppointment(appointment);
  }

  @EventPattern('delete-appointment')
  async deleteAppointment(appointment: any) {
    return this.appointmentService.deleteAppointment(appointment);
  }

  @EventPattern('get-appointment')
  async getAppointment(appointment: any) {
    return this.appointmentService.getAppointment(appointment);
  }

  @EventPattern('get-all-appointments')
  async getAllAppointments() {
    return this.appointmentService.getAllAppointments();
  }

  @EventPattern('get-appointment-by')
  async getAppointmentBy(Arg: any) {
    return this.appointmentService.getAppointmentBy(Arg);
  }
}
