import { User } from "src/auth/domain/entities";
import { UserRepository } from "../../domain/repositories";

export class SqlUserRepository implements UserRepository {
    private readonly sql = [];

    async register(user: User): Promise<void> {
        this.sql.push(user);
    }
}