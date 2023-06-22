import bcrypt from 'bcrypt';
/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';

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
      select: 0,
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  // timestamps: true adds createdAt and updatedAt fields
  {
    timestamps: true,
  }
);

// this is the method used to add methods to the schema
userSchema.methods.isUserExist = async function (
  id: string
): Promise<Partial<IUser> | null> {
  return await User.findOne(
    { id },
    { id: 1, password: 1, role: 1, needsPasswordChange: 1 }
  );
};

userSchema.statics.isUserExist = async function (
  id: string
): Promise<Pick<IUser, 'id' | 'password' | 'needsPasswordChange'> | null> {
  return await this.findOne(
    { id },
    { id: 1, password: 1, needsPasswordChange: 1 }
  );
};

userSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

// this is the model used to interact with the database
export const User = model<IUser, UserModel>('User', userSchema);

// using instance methods
// userSchema.methods.isPasswordMatched = async function (
//   givenPassword: string,
//   savedPassword: string
// ): Promise<boolean> {
//   return await bcrypt.compare(givenPassword, savedPassword);
// };

// // fat model thin controller method
// userSchema.pre('save', async function (next) {
//   // hashing user password
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds)
//   );

//   next();
// });
