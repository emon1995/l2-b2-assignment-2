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
      message: 'User fetched successfully',
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

export const UserControllers = {
  createUser,
  getAllUser,
};
