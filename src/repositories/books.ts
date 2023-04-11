import { Book } from "../entity/Book";
import { AppDataSource } from "../data-source";

interface IBook {
  name: string,
  author: string,
  yearOfPublication: number,
}

class BooksRepository {
    static async getBooks() {
        return AppDataSource.getRepository(Book).find();
    }

    static async addBook(book: IBook) {
        return AppDataSource.getRepository(Book).insert(book);
    }
}

export { BooksRepository };