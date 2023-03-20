import { Queue } from 'bullmq';

const myQueue = new Queue('books');

async function addBook() {
  await myQueue.add('Book', {
    name: 'Jerome',
    author: 'Billi Mylligan',
    yearOfPublication: 1990
  });
}

await addBook();