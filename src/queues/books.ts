import { Queue } from 'bullmq';
import { IBook } from "../interfaces/IBook"
import { redisConnection } from "../utils/redis";

const queueName = "books";

const myQueue = new Queue(queueName, { connection: redisConnection });

async function addBook(book: IBook) {
  console.log(`adding job ${book.name} to queue ${queueName}`)
  await myQueue.add(book.name, {
    id: book.id,
    name: book.name,
    author: book.author,
    yearOfPublication: book.yearOfPublication
  });
}

export default addBook;
