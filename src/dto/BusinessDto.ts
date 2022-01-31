import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export default class BusinessDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  logo: string;

  @IsNotEmpty()
  @IsString()
  domain: string;

  @IsBoolean()
  isMultipleLocationEnabled: boolean;

  @IsNotEmpty()
  @IsString()
  adminEmail: string;

  @IsNotEmpty()
  @IsString()
  adminPhone: string;

  @IsBoolean()
  isActive: boolean;

  @IsString()
  noOfEmployees: string;
}
