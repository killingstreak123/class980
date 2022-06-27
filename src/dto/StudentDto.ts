import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class StudentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  rollNo: number;

  @IsString()
  noOfStudent: string;

  @IsBoolean()
  studentIsActive: boolean;

  @IsNotEmpty()
  @IsString()
  studentEmail: string;

  @IsNotEmpty()
  @IsNumber()
  studentPhone: number;
}
