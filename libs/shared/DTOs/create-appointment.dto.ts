import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateAppointmentDto {
  @IsNumber()
  @IsNotEmpty()
  patientId: number;

  @IsNumber()
  @IsOptional()
  employeeId?: number;

  @IsNumber()
  @IsOptional()
  pharmacyId?: number;

  @IsDateString()
  @IsNotEmpty()
  appointmentDate: string;

  @IsEnum(['scheduled', 'completed', 'cancelled'])
  status: 'scheduled' | 'completed' | 'cancelled';
}
