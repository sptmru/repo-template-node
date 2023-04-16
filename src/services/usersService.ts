import addUser from "../queues/users";
import { IUser } from "../interfaces/IUser"

class UsersService {

  static async addUser(user: IUser): Promise<void> {
    return addUser(user)
  }
}

export { UsersService };
