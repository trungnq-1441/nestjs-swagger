const DBConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1',
  database: 'TEST_SWAGGER',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/databases/migrations/*.js'],
  cli: { migrationsDir: 'src/databases/migrations' },
  synchronize: false,
}

module.exports = DBConfig;
