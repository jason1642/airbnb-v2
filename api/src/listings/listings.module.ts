import { Module } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { ListingsController } from './listings.controller';
import { DatabaseModule } from '../database/database.module';
import { listingProviders } from './listings.providers';
// import { User, UserSchema } from '../schemas/users.schema';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Listing } from 'src/schemas/listings.schema';

@Module({
  imports: [
    DatabaseModule,
    // MongooseModule.forFeature([
    //   {
    //     name: 'listings',
    //     schema: Listing,
    //   },
    // ]),
  ],
  controllers: [ListingsController],
  providers: [ListingsService, ...listingProviders],
})
export class ListingsModule {}
