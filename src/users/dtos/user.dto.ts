import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'the email of user' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({ description: `user's password` })
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty({ description: `user's role` })
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}

export class FilterUserDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}
