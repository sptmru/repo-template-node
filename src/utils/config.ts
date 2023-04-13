import * as dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const redis =  {
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
  username: process.env.REDIS_USERNAME || '',
  password: process.env.REDIS_PASS || '',
  db: process.env.REDIS_DB || 0,
  tlsEnabled: process.env.REDIS_TLS_ENABLED || false,
};

export {
  MONGODB_URI,
  redis,
};
