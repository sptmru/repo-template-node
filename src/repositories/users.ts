import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { IUser } from "../interfaces/IUser"

class UsersRepository {
    static async addUser(user: IUser) {
        return AppDataSource.getRepository(User).insert(user);
    }
}

export { UsersRepository };
