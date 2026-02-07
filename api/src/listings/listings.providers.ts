import { Connection } from 'mongoose';
import { Listing } from '../schemas/listings.schema';

export const listingProviders = [
  {
    provide: 'LISTING_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Listing', Listing),
    inject: ['DATABASE_CONNECTION'],
  },
];
