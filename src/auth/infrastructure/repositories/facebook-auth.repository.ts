import { Auth, User } from "src/auth/domain/entities";
import { AuthRepository } from "../../domain/repositories";

export class FacebookAuthRepository implements AuthRepository {
    async login(auth: Auth): Promise<User> {
        // Connect with facebook
        return { email: auth.email, network: "FACEBOOK", networkId: "facebook-test" }
    }
}