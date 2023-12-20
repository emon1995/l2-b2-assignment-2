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
export const UserControllers = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUserById,
};
