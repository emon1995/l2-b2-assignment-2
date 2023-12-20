import express from 'express';
import { UserControllers } from './user.controllers';

const router = express.Router();

// will call controller func
router.post('/createUser', UserControllers.createUser);
router.get('/', UserControllers.getAllUser);

export const UserRoutes = router;
