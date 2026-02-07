import { Injectable, Inject } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Listing } from './interfaces/listing.interface';
// import { ListingSchema } from 'src/schemas/listings.schema';
import { CreateListingDto } from './dto/CreateListing.dto';

@Injectable()
export class ListingsService {
  constructor(
    @Inject('LISTING_MODEL')
    private readonly listingModel: Model<Listing>,
  ) {}

  async createListing(createListingDto: CreateListingDto): Promise<Listing> {
    const newListing: Listing = new this.listingModel(createListingDto);
    console.log(newListing);
    return newListing.save();
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
