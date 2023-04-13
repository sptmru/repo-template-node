import { AppDataSource } from "../src/data-source.js"
import fastify from "fastify"
import { bookRoutes } from "./routes/index.js"
import { startBooksWorker } from "./workers";

const server = fastify({ logger: true })
server.register(bookRoutes)

startBooksWorker();

AppDataSource.initialize().then(async () => {
  await server.listen({ port: 3000 })

  const address = server.server.address()
  console.log('server address: ', address)

}).catch(error => console.log(error))
