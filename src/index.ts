import Fastify, { FastifyInstance } from 'fastify'

import { AppDataSource } from "../src/data-source.js"

import { User } from "./entity/User.js"

const server: FastifyInstance = Fastify({})

AppDataSource.initialize().then(async () => {

  await server.listen({ port: 3000 })

  // console.log("Inserting a new user into the database...")
  // const user = new User()
  // user.firstName = "Timber"
  // user.lastName = "Saw"
  // user.age = 25
  // await AppDataSource.manager.save(user)
  // console.log("Saved a new user with id: " + user.id)

  // console.log("Loading users from the database...")
  const users = await AppDataSource.manager.find(User)
  console.log("Loaded users: ", users)
  const address = server.server.address()

}).catch(error => console.log(error))
