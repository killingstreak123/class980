import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('student')
export default class StudentModel extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'student_id' })
  studentId: number;

  @Column({ name: 'student_name', nullable: false, unique: true })
  name: string;

  //@Column({ name: 'logo', nullable: false })
  //logo: string;

  @Column({ name: 'roll_no', nullable: false, unique: true })
  rollNo: number;

  //@Column({ name: 'is_multiple_location_enabled', default: false })
  //isMultipleLocationEnabled: boolean;

  @Column({ name: 'number_of_Student' })
  noOfStudent: string;

  @Column({ name: 'student_email', length: 30, nullable: false })
  studentEmail: string;

  @Column({ name: 'student_phone', nullable: false, unique: true })
  studentPhone: number;

  // @Column({name : "admin_phone", length: 20, nullable: false })
  // adminPhone: string;

  // @Column({ name: 'admin_email', nullable: false, unique: true })
  // adminEmail: string;

  @Column({ name: 'student_isActive', default: true })
  studentIsActive: boolean;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
