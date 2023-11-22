import { Auth, User } from "../entities";

export interface AuthRepository {
    login(auth: Auth): Promise<User>;
}