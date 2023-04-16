import { BooksController } from "../contronllers/book";
import { UsersController } from "src/contronllers/user";

const getBooks = {
  schema: {
    // querystring: {
    //   type: 'object',
    //   properties: {},
    // },
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            author: { type: 'string' },
            yearOfPublication: { type: 'number' }
          }
        }
      }
    }
  },
  handler: BooksController.getBooks
}

const addBook = {
  schema: {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        author: { type: 'string' },
        yearOfPublication: { type: 'number' }
      },
      required: ['name', 'author'],
    },
    response: {
      200: {
        type: 'object',
        properties: {
          data: { type: 'string' }
        }
      }
    }
  },
  handler: BooksController.addBook
}

async function bookRoutes (fastify: any, options: any, done: any) {
  fastify.get('/books', getBooks);
  fastify.post('/books', addBook);

  done();
}

const addUser = {
  schema: {
    body: {
      type: 'object',
      properties: {
        login: { type: 'string' },
      },
      required: ['login'],
    },
    response: {
      200: {
        type: 'object',
        properties: {
          data: { type: 'string' }
        }
      }
    }
  },
  handler: UsersController.addUser
}

async function userRoutes (fastify: any, options: any, done: any) {
  fastify.post('/user', addUser);

  done();
}

export { bookRoutes, userRoutes };
