import { Request, Response } from 'express';
import { UserServices } from './user.services';

// create user post method
const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body;

    const result = await UserServices.createUserIntoDB(userData);

    res.status(200).json({
      success: true,
      message: 'User is created successfully',
      data: result,
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
const getAllUser = async (req: Request, res: Response) => {
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
const getUserById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const user = await UserServices.getSingleUserFromDB(id);

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

export const UserControllers = {
  createUser,
  getAllUser,
  getUserById,
};
