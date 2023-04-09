import { BooksRepository } from "../repositories/books";
// import { InsertResult } from "typeorm";
import addBook from "src/queues/books";

interface IBook {
  id: number,
  name: string,
  author: string,
  yearOfPublication: number,
}

class BooksService {

    static async getBooks(): Promise<IBook[]> {
        return BooksRepository.getBooks()
    }

    static async addBook(book: IBook): Promise<void> {
        return addBook(book)
    }
}

export { BooksService };