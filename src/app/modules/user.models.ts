import { Schema, model } from 'mongoose';
import { User } from './users/user.interface';

const userSchema = new Schema<User>({
  userId: {
    type: String,
    unique: true,
    required: [true, 'user Id is required'],
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'user Id is required'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  fullName: {
    firstName: {
      type: String,
      required: [true, 'first name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'last name is required'],
    },
  },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, required: true },
  hobbies: [String],
  address: {
    street: String,
    city: String,
    country: String,
  },
  orders: [
    {
      productName: String,
      price: Number,
      quantity: Number,
    },
  ],
});

export const UserModel = model<User>('User', userSchema);
