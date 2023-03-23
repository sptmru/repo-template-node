import Fastify, { FastifyBaseLogger, FastifyInstance, FastifyReply, FastifyRequest, FastifyTypeProviderDefault, RouteGenericInterface } from "fastify";
import { ResolveFastifyRequestType } from "fastify/types/type-provider";
import { Server, IncomingMessage, ServerResponse } from "http";

const server = Fastify({ logger: true})

server.route(
  {
    method: 'GET',
    url: '/',
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
    handler: function (request, reply) {
      reply.send({ data: 'hello books' })
    }
  }
)


server.route(
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
    handler: function (request, reply) {
      reply.send({ data: 'send book' })
    }
  }
)

export default server;