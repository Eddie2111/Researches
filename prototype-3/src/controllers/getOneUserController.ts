"use strict";
import {
  IUser,
  User,
} from '../schema/user';

export async function getOneUser(id: string): Promise<IUser[]> {
  try {
    const structure = await User.find({ userId: id });
    return structure;
  } catch (err: unknown) {
    console.log(err);
    return [];
  }
}
