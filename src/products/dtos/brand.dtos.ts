import {
  IsString,
  IsUrl,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  Min,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `brand's name` })
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({ description: `brand's image` })
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class FilterBrandDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;
}
