import { BooksRepository } from "../repositories/books";
import addBook from "../queues/books";
import { IBook } from "../interfaces/IBook"

class BooksService {

    static async getBooks(): Promise<IBook[]> {
        return BooksRepository.getBooks()
    }

    static async addBook(book: IBook): Promise<void> {
        return addBook(book)
    }
}

export { BooksService };