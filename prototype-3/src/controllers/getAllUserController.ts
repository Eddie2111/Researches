"use strict";
import {
  IUser,
  User,
} from '../schema/user';

interface IresponseProps {
  totalCount: number;
  users: IUser[];
}

export async function getAllUsers(): Promise<IresponseProps> {
  try {
    const dataset = await User.find().limit(10);
    const totalUsers = await User.countDocuments({});
    return {
      totalCount: totalUsers,
      users: dataset,
    };
  } catch (err: unknown) {
    console.log(err);
    return {
      totalCount: 0,
      users: [],
    };
  }
}
