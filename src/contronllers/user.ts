import { FastifyReply, FastifyRequest } from "fastify";
import { v4 } from 'uuid';

import { IUser } from "../interfaces/IUser";
import { UsersService } from "src/services/usersService";

class UsersController {

  static async addUser(req: FastifyRequest, reply: FastifyReply) {
    const userData: IUser = req.body as IUser;
    const user = {
      id: v4(),
      login: userData.login
    }

    try {
      await UsersService.addUser(user);
      reply.code(201).send(user);
    } catch (err) {
      reply.code(400).send({ error: "Bad Request" })
    }
  }
}

export { UsersController };
