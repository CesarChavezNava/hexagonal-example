import { User } from "src/auth/domain/entities";
import { UserRepository } from "../../domain/repositories";

export class PosgrestUserRepository implements UserRepository {
    private readonly posgrest = [];

    async register(user: User): Promise<void> {
        this.posgrest.push(user);
    }
}