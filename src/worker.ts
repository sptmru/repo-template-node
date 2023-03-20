import { Worker } from 'bullmq';

const worker = new Worker('books', async book => {
  console.log(book.data);
});