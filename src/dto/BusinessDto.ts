import { Allow, IsBoolean, IsNotEmpty, IsString } from 'class-validator';

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

  // @IsBoolean()
  // isActive: boolean;

  @IsString()
  noOfEmployees: string;
}
