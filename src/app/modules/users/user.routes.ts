import express from 'express';
import { UserControllers } from './user.controllers';

const router = express.Router();

// will call controller func
router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getAllUser);
router.get('/:userId', UserControllers.getUserById);

export const UserRoutes = router;
