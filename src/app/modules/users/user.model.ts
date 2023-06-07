import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

// this is the schema used to validate the data sent to the database
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  // timestamps: true adds createdAt and updatedAt fields
  {
    timestamps: true,
  }
);

// this is the model used to interact with the database
export const User = model<IUser, UserModel>('User', userSchema);
