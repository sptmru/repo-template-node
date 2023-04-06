
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
  handler: function (request: any, reply: any) {
    reply.send({ data: 'hello books' })
  }
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
  handler: function (request: any, reply: any) {
    reply.send({ data: 'send book' })
  }
}

async function bookRoutes (fastify: any, options: any, done: any) {

  fastify.get('/', getBooks);

  fastify.post('/', postBook);

  done();
}

export { bookRoutes };