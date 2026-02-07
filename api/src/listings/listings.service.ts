import { Injectable, Inject } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Listing } from 'src/schemas/listings.schema';
import { CreateListingDto } from './dto/CreateListing.dto';

@Injectable()
export class ListingsService {
  constructor(@Inject('Listing') private listingModel: Model<typeof Listing>) {}

  async createListing(
    createListingDto: CreateListingDto,
  ): Promise<typeof Listing> {
    const newListing = new this.listingModel(createListingDto);
    console.log(newListing);
    return newListing.save();
  }

  findAll() {
    return `This action returns all listings`;
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
