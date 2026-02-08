import { Controller, Get, Query } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { QueryMarketDto } from './dto/QueryMarket.dto';
// import { QueryMarketDto } from './dto/QueryMarket.dto';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  //   @Get()
  //   findAll() {
  //     return this.listingsService.findAll();
  //   }

  @Get()
  findAll(@Query() query: QueryMarketDto) {
    return this.listingsService.findAll(query);
  }
}
