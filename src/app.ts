import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/users/user.routes';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!');
});

export default app;
