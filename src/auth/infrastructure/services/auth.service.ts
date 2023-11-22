import { SignInWithSocialNetworkPort } from "src/auth/application";
import { Auth, User } from "../../domain/entities";

export class AuthService  {
    constructor(
        private readonly signInWithSocialNetwork: SignInWithSocialNetworkPort
    ) {}

    async signIn(auth: Auth): Promise<User> {
        return await this.signInWithSocialNetwork.execute(auth);
    }
}