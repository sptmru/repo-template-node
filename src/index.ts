import { AppDataSource } from "../src/data-source.js"
import fastify from "fastify"
import { bookRoutes, userRoutes } from "./routes/index.js"
import { startBooksWorker } from "./workers";

const server = fastify({ logger: true })
server.register(bookRoutes)
server.register(userRoutes);

startBooksWorker();

AppDataSource.initialize().then(async () => {
  await server.listen({ port: 3000 })

  const address = server.server.address()
  console.log('server address: ', address)

}).catch(error => console.log(error))
