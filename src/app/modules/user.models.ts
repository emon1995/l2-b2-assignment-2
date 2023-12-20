import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
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

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  const hashedPassword = await bcrypt.hash(user.password, 10);
  user.password = hashedPassword;
  next();
});

export const UserModel = model<User>('User', userSchema);
