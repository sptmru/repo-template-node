import { Worker, Job } from 'bullmq';
import { IBook } from "../interfaces/IBook"
import { BooksRepository } from '../repositories/books';
import { redisConnection } from "../utils/redis";

const queueName = "books";
const workerName = "BooksWorker";

const startBooksWorker = () => {
  const worker = new Worker(queueName, async (book: Job) => {
    const bookJob = book.data as IBook;
    console.log(`processing job ${bookJob.name} by ${workerName}`);
    await BooksRepository.addBook(bookJob);
  }, { connection: redisConnection});
  console.log(`worker ${workerName} started`);
}

export { startBooksWorker };
