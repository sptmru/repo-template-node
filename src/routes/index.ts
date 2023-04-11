import { BooksController } from "../contronllers/book"

const getBooks = {
  schema: {
    querystring: {
      type: 'object',
      properties: {},
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
  handler: BooksController.getBooks
}


const postBook = {
  schema: {
    querystring: {
      type: 'object',
      properties: {
        id: { type: 'number' },
        name: { type: 'string' },
        author: { type: 'string' },
        yearOfPublication: { type: 'number' }
      },
      required: ['id', 'name', 'author'],
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

  fastify.get('/', getBooks);
  fastify.post('/', postBook);

  done();
}

export { bookRoutes };