/* eslint-disable prettier/prettier */
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

const config: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'blog-db',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: true, // only in dev env
};

export default config;
