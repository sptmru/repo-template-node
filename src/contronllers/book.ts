import { BooksService } from "../services/booksService";
import { FastifyReply, FastifyRequest } from "fastify";

const { v4: uuidv4 } = require('uuid')

interface IBook {
  name: string,
  author: string,
  yearOfPublication: number,
}

class BooksController {

  static async getBooks(req: FastifyRequest, reply: FastifyReply) {
    try {
      const books = await BooksService.getBooks();
      reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(books);
    } catch (err) {
      reply.code(404).send({ error: "Not found" });
    }
  }

  static async addBook(req: FastifyRequest, reply: FastifyReply) {
    const bookData: IBook = req.body as IBook;
    const book = {
      id: uuidv4(),
      name: bookData.name,
      author: bookData.author,
      yearOfPublication: bookData.yearOfPublication,
    }

    try {
      const createdBook = await BooksService.addBook(book);
      reply.code(201).send(createdBook);
    } catch (err) {
      reply.code(400).send({ error: "Bad Request" })
    }
  }
}

export { BooksController };