import express from 'express';
import { UserControllers } from './user.controllers';

const router = express.Router();

// will call controller func
router.post('/', UserControllers.createUser);
router.get('/', UserControllers.getAllUser);
router.get('/:userId', UserControllers.getUserById);
router.put('/:userId', UserControllers.updateUserById);
router.delete('/:userId', UserControllers.deleteUserById);
router.put('/:userId/orders', UserControllers.addProductToOrder);
router.get('/:userId/orders', UserControllers.getAllOrdersForUser);

export const UserRoutes = router;
