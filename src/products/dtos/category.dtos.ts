import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Min,
  IsUrl,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `category's name` })
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: `category's image` })
  readonly image: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}

export class FilterCategoryDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}
