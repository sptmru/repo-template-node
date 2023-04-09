import { Queue } from 'bullmq';

const myQueue = new Queue('books');

interface IBook {
  id?: number,
  name: string,
  author: string,
  yearOfPublication: number,
}

async function addBook(book: IBook) {
  await myQueue.add('Book', {
    name: book.name,
    author: book.author,
    yearOfPublication: book.yearOfPublication
  });
}

export default addBook;