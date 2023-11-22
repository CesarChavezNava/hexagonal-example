import { SignInWithSocialNetworkPort, SignInWithSocialNetworkUseCase } from "../../application";
import { FacebookAuthRepository, GoogleAuthRepository, PosgrestUserRepository, SqlUserRepository } from "../repositories";

const googleComposition = () => {
    const signInWithGoogle = new SignInWithSocialNetworkUseCase(
        new GoogleAuthRepository(),
        new SqlUserRepository()
    )

    return {
        signInWithGoogle
    }
}

const facebookComposition = () => {
    const signInWithFacebook = new SignInWithSocialNetworkUseCase(
        new FacebookAuthRepository(),
        new PosgrestUserRepository()
    )

    return {
        signInWithFacebook
    }
}

export const networksContainer = new Map<string, SignInWithSocialNetworkPort>([
    ['google', googleComposition().signInWithGoogle],
    ['facebook', facebookComposition().signInWithFacebook]
]);