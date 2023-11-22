import { Auth, User } from "src/auth/domain/entities";
import { AuthRepository } from "../../domain/repositories";

export class GoogleAuthRepository implements AuthRepository {
    async login(auth: Auth): Promise<User> {
        // Connect with google
        return { email: auth.email, network: "GOOGLE", networkId: "google-test" }
    }
}