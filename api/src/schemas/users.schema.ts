import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsStrongPassword } from 'class-validator';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop({
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please use a valid email address'],
  })
  email: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsStrongPassword({
    minLength: 6,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  // @Prop({
  //   required: true,
  //   trim: true,
  //   maxLength: 35,
  //   minLength: 6,
  // })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
