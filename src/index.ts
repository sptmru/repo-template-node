import { AppDataSource } from "../src/data-source.js"
import fastify from "fastify"
import { bookRoutes } from "./routes/index.js"

const server = fastify({ logger: true })
server.register(bookRoutes)

AppDataSource.initialize().then(async () => {
  await server.listen({ port: 3000 })

  const address = server.server.address()
  console.log('server address: ', address)

}).catch(error => console.log(error))
