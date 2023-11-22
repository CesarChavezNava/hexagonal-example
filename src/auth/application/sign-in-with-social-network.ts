import { Auth, User } from "../domain/entities";
import { AuthRepository, UserRepository } from "../domain/repositories";

export interface SignInWithSocialNetworkPort {
    execute(auth: Auth): Promise<User>
}

export class SignInWithSocialNetworkUseCase implements SignInWithSocialNetworkPort {
    constructor(
        private readonly authRepository: AuthRepository,
        private readonly userRepository: UserRepository
    ) {}

    async execute(auth: Auth): Promise<User> {
        const user = await this.authRepository.login(auth);

        // Validations

        await this.userRepository.register(user);
        return user;
    }

}