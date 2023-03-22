import { Worker } from 'bullmq';
import { AppDataSource } from './data-source';
import { Book } from './entity/Book';


const worker = new Worker('books', async book => {

  const item = await AppDataSource.manager.create(Book)

  AppDataSource.manager.save(item);
});