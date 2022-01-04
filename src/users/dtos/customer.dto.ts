import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  IsOptional,
  IsPositive,
  Min,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

import { CreateSkillDto } from './skill.dto';

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `customer's name` })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `customer's lastName` })
  readonly lastName: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  @ApiProperty({ description: `customer's phone` })
  readonly phone: string;

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @ApiProperty({ description: `customer's skills` })
  readonly skills: CreateSkillDto;
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}

export class FilterCustomerDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}
