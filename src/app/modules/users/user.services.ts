import { UserModel } from '../user.models';
import { User } from './user.interface';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
