import { Body, Controller } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateAppointmentDto, UpdateAppointmentDto } from 'libs/shared/DTOs';

@Controller()
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @MessagePattern('create-appointment')
  async createAppointment(@Body() appointment: CreateAppointmentDto) {
    return this.appointmentService.createAppointment(appointment);
  }

  @MessagePattern('update-appointment')
  async updateAppointment(appointment: UpdateAppointmentDto) {
    return this.appointmentService.updateAppointment(appointment);
  }

  @MessagePattern('delete-appointment')
  async deleteAppointment(appointmentID: number) {
    return this.appointmentService.deleteAppointment(appointmentID);
  }

  @MessagePattern('get-appointment')
  async getAppointment(appointmentID: any) {
    return this.appointmentService.getAppointment(appointmentID);
  }

  @MessagePattern('get-all-appointments')
  async getAllAppointments() {
    return this.appointmentService.getAllAppointments();
  }

  @MessagePattern('get-appointment-by')
  async getAppointmentBy(Arg: any) {
    return this.appointmentService.getAppointmentBy(Arg);
  }

  @EventPattern('appointment.created')
  async handleAppointmentCreated(appointment: any) {
    console.log('Appointment created event received:', appointment);
    // Further event-specific logic
  }
}
