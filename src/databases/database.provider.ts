import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1',
      database: 'TEST_SWAGGER',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: false,
    }),
  },
];
