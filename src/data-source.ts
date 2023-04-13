import 'reflect-metadata';
import path from 'path';
import { fileURLToPath, } from 'url';
import { DataSource, } from 'typeorm';
import { MONGODB_URI } from './utils/config.js';

const _filename = fileURLToPath(import.meta.url,);
const _dirname = path.dirname(_filename,);

const MongoDataSource = new DataSource({
  type: 'mongodb',
  url: MONGODB_URI,
  useNewUrlParser: true,
  synchronize: true,
  useUnifiedTopology: true,
  logging: true,
  ssl: false,
  entities: [ `${_dirname}/entity/*.ts`, ],
  migrations: [ `${_dirname}/migrations/*.ts`, ],
  subscribers: [],
},);

MongoDataSource.initialize();

export { MongoDataSource as AppDataSource, };
