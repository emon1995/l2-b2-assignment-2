import { Request, Response } from 'express';
import { UserServices } from './user.services';

const createUser = async (req: Request, res: Response) => {
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

export const UserControllers = {
  createUser,
};
