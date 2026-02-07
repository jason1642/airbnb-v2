import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { MongooseModule } from '@nestjs/mongoose';
import { ListingsModule } from './listings/listings.module';
import 'dotenv/config';

// console.log(process.env.MONGODB_USERNAME);

@Module({
  imports: [
    UsersModule,
    ListingsModule,
    // MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@portfolio-website.halgu.mongodb.net/sample_airbnb?retryWrites=true&w=majority
    //   `),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
