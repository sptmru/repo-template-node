import Redis from 'ioredis';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { redis } from '../utils/config.js';

const redisUsername = redis.username ? redis.username : '';
const redisPassword = redis.password ? `:${redis.password}@` : '';
const redisProtocol = redis.tlsEnabled ? 'rediss://' : 'redis://';
const redisUri = `${redisProtocol}${redisUsername}${redisPassword}${redis.host}:${redis.port}/${redis.db}`;

// docs: https://github.com/luin/ioredis
const redisConnectionOptions = {
    autoResubscribe: true,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
    reconnectOnError: (error: any) => {
        return true;
    },
    retryStrategy: () => {
        return 1;
    }
};

let redisConnection: any = null;

if (!process.env.DISABLE_REDIS) {
    redisConnection = new Redis(redisUri, redisConnectionOptions);

    redisConnection.on('ready', () => {
        console.log(`Connected to Redis at ${redisUri}`);
    });
    redisConnection.on('error', (error: any)  => {
        console.error(`Failed to connect to Redis at ${redisUri}, error: ${error.message}`);
    });
}

export { redisConnection };
