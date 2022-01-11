import { IsNotEmpty } from "class-validator"

export default class BusinessDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  logo: string;
  @IsNotEmpty()
  domain: string;
  @IsNotEmpty()
  isMultipleLocationEnabled: boolean;
  noOfEmplopyees: string;
}