const fastify = require('fastify')({ logger: true })

fastify.route(
  {
    method: 'GET',
    url: '/',
    schema: {
      querystring: {
        type: 'object',
        properties: {
          id: { type: 'number' }
        },
        required: ['id'],
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
  }
)


fastify.route(
  {
    method: 'POST',
    url: '/',
    schema: {
      querystring: {
        type: 'object',
        properties: {
          id: { type: 'number' },
          name: { type: 'string'},
          author: { type: 'string'},
          yearOfPublication: { type: 'number'}
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
  }
)
