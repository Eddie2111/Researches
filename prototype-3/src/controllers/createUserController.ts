"use strict";
import {
  IUser,
  User,
} from '../schema/user';

export async function CreateUser(data: Partial<IUser>): Promise<boolean> {
  try {
    const structure = new User(data);
    await structure.save();
    return true;
  } catch (err: unknown) {
    console.log(err);
    return false;
  }
}
