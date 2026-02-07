// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { IsStrongPassword } from 'class-validator';
// import { HydratedDocument } from 'mongoose';

// export type UserDocument = HydratedDocument<User>;

// @Schema()
// export class User {
//   @Prop({ unique: true, required: true })
//   username: string;

//   @Prop({
//     required: true,
//     unique: true,
//     lowercase: true,
//     trim: true,
//     match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please use a valid email address'],
//   })
//   email: string;

//   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//   @IsStrongPassword({
//     minLength: 6,
//     minNumbers: 1,
//     minSymbols: 1,
//     minUppercase: 1,
//   })
//   @Prop()
//   password: string;
//   // @Prop({
//   //   required: true,
//   //   trim: true,
//   //   maxLength: 35,
//   //   minLength: 6,
//   // })
// }

// export const UserSchema = SchemaFactory.createForClass(User);
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

// export type ListingDocument = HydratedDocument<Listing>;
export const User: mongoose.Schema = new mongoose.Schema({
  _id: String,
  username: String,
  email: String,
  password: String,
});

// const Listings = mongoose.model('listings', listingSchema);
// export { Listings };
