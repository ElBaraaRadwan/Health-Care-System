import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
  } from 'typeorm';
  import { User } from './user.entity';
  import { Pharmacy } from './pharmacy.entity';

  @Entity('appointment')
  export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.patientAppointments, { onDelete: 'CASCADE' })
    patient: User;

    @ManyToOne(() => User, (user) => user.employeeAppointments, { onDelete: 'SET NULL', nullable: true })
    employee: User;

    @ManyToOne(() => Pharmacy, (pharmacy) => pharmacy.appointments, { onDelete: 'SET NULL', nullable: true })
    pharmacy: Pharmacy;

    @Column({ type: 'timestamp' })
    appointmentDate: Date;

    @Column({ type: 'enum', enum: ['scheduled', 'completed', 'cancelled'] })
    status: 'scheduled' | 'completed' | 'cancelled';

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
  }
