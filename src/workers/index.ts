import { Worker } from 'bullmq';
import { AppDataSource } from '../data-source';
import { Book } from '../entity/Book';
import { BooksRepository } from 'src/repositories/books';


const worker = new Worker('books', async book => {

  const item = await BooksRepository.addBook(book)

  AppDataSource.manager.save(item);
});