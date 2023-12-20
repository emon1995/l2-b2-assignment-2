import { Request, Response } from 'express';
import { UserServices } from './user.services';

// create user post method
const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body;

    const newUser = await UserServices.createUserIntoDB(userData);

    const { password, ...userWithoutPassword } = newUser.toObject();

    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: userWithoutPassword,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create user',
      error: error,
    });
  }
};

// get all user get method
const getAllUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await UserServices.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch users',
      error: error,
    });
  }
};

// get all user get method
const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;

    const user = await UserServices.getSingleUserFromDB(userId);

    if (user) {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully',
        data: user,
      });
    } else {
      res.status(200).json({
        success: false,
        message: 'User not found!',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user',
      error: error,
    });
  }
};

// update all user put method
const updateUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;
    const updateUserData = req.body;

    const user = await UserServices.updateSingleUserFromDB(
      userId,
      updateUserData,
    );

    if (user) {
      const { password, ...userWithoutPassword } = user.toObject();
      res.status(200).json({
        success: true,
        message: 'User updated successfully',
        data: userWithoutPassword,
      });
    } else {
      res.status(200).json({
        success: false,
        message: 'User not found!',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user',
      error: error,
    });
  }
};

// delete single user delete method
const deleteUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.userId;

    const user = await UserServices.deleteSingleUserFromDB(userId);

    if (user) {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully',
        data: null,
      });
    } else {
      res.status(200).json({
        success: false,
        message: 'User not found!',
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user',
      error: error,
    });
  }
};

// add product to order put method
const addProductToOrder = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const { productName, price, quantity } = req.body;

    const user = await UserServices.addProductToOrderFromDB(userId);

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: null,
      });
      return;
    }

    if (user.orders) {
      user.orders.push({ productName, price, quantity });
    } else {
      user.orders = [{ productName, price, quantity }];
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user',
      error: error,
    });
  }
};

// get all orders get method
const getAllOrdersForUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const userId = req.params.userId;

    const user = await UserServices.getAllOrdersFromDB(userId);

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found!',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: {
        orders: user.orders || [],
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user',
      error: error,
    });
  }
};
export const UserControllers = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
  addProductToOrder,
  getAllOrdersForUser,
};
