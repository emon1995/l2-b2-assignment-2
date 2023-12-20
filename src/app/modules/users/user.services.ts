import { UserModel } from '../user.models';
import { User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.findById({ _id: id });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
};
