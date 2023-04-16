import { Queue } from 'bullmq';
import { IUser } from "../interfaces/IUser"
import { redisConnection } from "../utils/redis";

const queueName = "users";

const myQueue = new Queue(queueName, { connection: redisConnection });

async function addUser(user: IUser) {
  console.log(`adding job ${user.login} to queue ${queueName}`)
  await myQueue.add(user.login, {
    id: user.id,
    login: user.login
  });
}


export default addUser;
