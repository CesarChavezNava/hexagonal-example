import { Request, Response } from 'express';
import { networksContainer } from './compositions';

export class AuthController {
    async login(req: Request, res: Response): Promise<void> {
        try {
            const socialNetwork = req.params.socialNetwork;
            const { email } = req.body;
        
            const signInWithSocialNetwork = networksContainer.get(socialNetwork);
            const user = await signInWithSocialNetwork.execute({ email });
            
            res.status(200).send(user);
        } catch(error) {
            res.status(500).send({ error: error.message });
        }
    }
}

export const authController = new AuthController();