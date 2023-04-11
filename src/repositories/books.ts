import { Book } from "../entity/Book";
import { AppDataSource } from "../data-source";
import { IBook } from "../interfaces/IBook"

class BooksRepository {
    static async getBooks() {
        return AppDataSource.getRepository(Book).find();
    }

    static async addBook(book: IBook) {
        return AppDataSource.getRepository(Book).insert(book);
    }
}

export { BooksRepository };