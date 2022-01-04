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

import { MongoIdPipe } from '../../common/mongo-id.pipe';
import { CustomersService } from '../services/customers.service';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
  FilterCustomerDto,
} from '../dtos/customer.dto';

@Controller('customers')
export class CustomerController {
  constructor(private customersService: CustomersService) {}

  @Get()
  findAll(@Query() params: FilterCustomerDto) {
    return this.customersService.findAll(params);
  }

  @Get(':id')
  get(@Param('id', MongoIdPipe) id: string) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateCustomerDto) {
    return this.customersService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateCustomerDto,
  ) {
    return this.customersService.update(id, payload);
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    return this.customersService.remove(id);
  }
}
