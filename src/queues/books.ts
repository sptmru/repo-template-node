import { Queue } from 'bullmq';
import { IBook } from "../interfaces/IBook"

const myQueue = new Queue('books');


async function addBook(book: IBook) {
  await myQueue.add('Book', {
    name: book.name,
    author: book.author,
    yearOfPublication: book.yearOfPublication
  });
}

export default addBook;