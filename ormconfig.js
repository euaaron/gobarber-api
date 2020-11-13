export default {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PORT || 'docker',
  database: process.env.DB_DATA || 'gostack_gobarber',
  entities: ['./dist/models/*.js'],
  migrations: ['./dist/database/migrations/*.js'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
