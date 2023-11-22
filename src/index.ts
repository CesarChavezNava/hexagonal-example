import * as express from 'express';
import { authRouter } from './auth/infrastructure/routes';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_, res) => {
    res.send('pong');
});

app.use('/api/v1/auth', authRouter)

const server = app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

export  { app, server }