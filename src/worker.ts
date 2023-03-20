import { Worker } from 'bullmq';

const worker = new Worker('books', async job => {
  console.log(job.data);
});