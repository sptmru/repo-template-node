import { BooksController } from "../contronllers/book";

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


const postBook = {
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

  fastify.get('/', getBooks);
  fastify.post('/', postBook);

  done();
}

export { bookRoutes };
