import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
  import { Payment } from './payment.entity';
  import { Appointment } from './appointment.entity';

  @Entity('user')
  export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ type: 'enum', enum: ['patient', 'employee', 'admin'] })
    role: 'patient' | 'employee' | 'admin';

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Payment, (payment) => payment.user)
    payments: Payment[];

    @OneToMany(() => Appointment, (appointment) => appointment.patient)
    patientAppointments: Appointment[];

    @OneToMany(() => Appointment, (appointment) => appointment.employee)
    employeeAppointments: Appointment[];
  }
