import { Worker, Job } from 'bullmq';
import { IBook } from "../interfaces/IBook"
import { BooksRepository } from '../repositories/books';

const worker = new Worker('books', async (book: Job) => {

  const bookJob = book.data as IBook
  const item = await BooksRepository.addBook(bookJob);
});