import config from '../../../config/index';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';
import { User } from './user.model';
import { generatedUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated incremental id
  const id = await generatedUserId();

  user.id = id;

  // default password
  if (!user.password) {
    user.password = config.default_user_password as string;
  }

  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(400, 'Failed to Create');
  }

  return createdUser;
};

export const UserService = {
  createUser,
};
