import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

// this is the interface used to create a new user
type UserModel = Model<IUser, object>

// this is the schema used to validate the data sent to the database
const userSchema = new Schema<IUser, UserModel>(
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
)

// this is the model used to interact with the database
export const User = model<IUser, UserModel>('User', userSchema)
