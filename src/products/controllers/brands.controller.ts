import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { MongoIdPipe } from '../../common/mongo-id.pipe';
import { BrandsService } from '../services/brands.service';
import {
  CreateBrandDto,
  UpdateBrandDto,
  FilterBrandDto,
} from '../dtos/brand.dtos';

@ApiTags('brands')
@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  findAll(@Query() params: FilterBrandDto) {
    return this.brandsService.findAll(params);
  }

  @Get(':id')
  get(@Param('id', MongoIdPipe) id: string) {
    return this.brandsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.brandsService.remove(id);
  }
}
