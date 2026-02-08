import { Injectable, Inject } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Listing } from './interfaces/listing.interface';
// import { ListingSchema } from 'src/schemas/listings.schema';
import { CreateListingDto } from './dto/CreateListing.dto';
// import { QueryMarketDto } from './dto/QueryMarket.dto';

@Injectable()
export class ListingsService {
  constructor(
    @Inject('LISTING_MODEL')
    private readonly listingModel: Model<Listing>,
  ) {}

  async createListing(createListingDto: CreateListingDto) {
    const newListing: Listing = new this.listingModel(createListingDto);
    console.log(newListing);
    return newListing.save();
  }

  async queryMarket(name: string, limit: number): Promise<Listing[]> {
    const query: any = {};
    if (name) {
      query['address.market'] = name;
    }
    if (limit) {
      console.log(limit);
    }
    return this.listingModel.find(query).limit(limit).exec();
  }

  findAll(): Promise<Listing[]> {
    return this.listingModel.find().limit(20).exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} listing`;
  }

  update(id: number, updateListingDto: any) {
    console.log(updateListingDto);
    return `This action updates a #${id} listing`;
  }

  remove(id: number) {
    return `This action removes a #${id} listing`;
  }
}
