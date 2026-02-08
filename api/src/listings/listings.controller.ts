import { Controller, Get, Query } from '@nestjs/common';
import { ListingsService } from './listings.service';
// import { QueryMarketDto } from './dto/QueryMarket.dto';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Get()
  findAll() {
    return this.listingsService.findAll();
  }

  @Get()
  queryMarkets(@Query('name') name: string, @Query('limit') limit: number = 6) {
    return this.listingsService.queryMarket(name, limit);
  }
}
