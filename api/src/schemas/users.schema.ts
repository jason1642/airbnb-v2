import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
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
    trime: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please use a valid email address'],
  })
  email: string;

  @Prop({
    required: true,
    maxLength: 35,
    minLength: 6,
  })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
