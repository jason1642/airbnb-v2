import * as mongoose from 'mongoose';
import 'dotenv/config';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@portfolio-website.halgu.mongodb.net/sample_airbnb?retryWrites=true&w=majority
        `),
  },
];
