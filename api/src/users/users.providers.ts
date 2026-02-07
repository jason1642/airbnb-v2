import { Connection } from 'mongoose';
import { User } from 'src/schemas/users.schema';
export const usersProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', User),
    inject: ['DATABASE_CONNECTION'],
  },
];
