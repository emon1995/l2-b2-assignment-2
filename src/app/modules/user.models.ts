import { Schema, model } from "mongoose";
import { User } from "./users/user.interface";


const userSchema = new Schema<User>({
    userId: {type: String, unique: true},
    username: {type: String, unique: true},
    password: String,
    fullName: {
        firstName: String,
        lastName: String,
    },
    age: Number,
    email: String,
    isActive: Boolean,
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
        }
    ]
})

export const UserModel = model<User>('User', userSchema);