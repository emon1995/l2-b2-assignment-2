import express from 'express';
import { UserControllers } from './user.controllers';

const router = express.Router();

// will call controller func
router.post('/createUser', UserControllers.createUser);

export const UserRoutes = router;