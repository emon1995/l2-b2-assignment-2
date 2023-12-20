import { UserModel } from '../user.models';
import { User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await UserModel.find(
    {},
    'username fullName age email address',
  ).exec();
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId }, '-password').exec();
  return result;
};

const updateSingleUserFromDB = async (userId: string, updateUser: User) => {
  const result = await UserModel.findOneAndUpdate({ userId }, updateUser, {
    new: true,
  });
  return result;
};

const deleteSingleUserFromDB = async (userId: string) => {
  const result = await UserModel.findOneAndDelete({ userId });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateSingleUserFromDB,
  deleteSingleUserFromDB,
};
