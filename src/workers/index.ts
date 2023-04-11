import { Worker, Job } from 'bullmq';
import { AppDataSource } from '../data-source';
// import { Book } from '../entity/Book';
import { BooksRepository } from 'src/repositories/books';

interface IBook {
  name: string,
  author: string,
  yearOfPublication: number,
}

const worker = new Worker('books', async (book: Job) => {

  const bookJob = book.data as IBook
  const item = await BooksRepository.addBook(bookJob);
});