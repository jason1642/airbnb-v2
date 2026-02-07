import { Module } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { ListingsController } from './listings.controller';
// import { User, UserSchema } from '../schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Listing } from 'src/schemas/listings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Listing.name,
        schema: Listing,
      },
    ]),
  ],
  controllers: [ListingsController],
  providers: [ListingsService],
})
export class UsersModule {}
