import { BooksRepository } from "../repositories/books";
import { InsertResult } from "typeorm";

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

    static async addBook(book: IBook): Promise<InsertResult> {
        return BooksRepository.addBook(book)
    }
}

export { BooksService };