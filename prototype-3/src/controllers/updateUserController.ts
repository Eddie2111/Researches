"use strict";

import {
  IUser,
  User,
} from '../schema/user';

interface IData {
  userId: string;
  value: Partial<IUser>;
}

export async function UpdateUser(data: IData): Promise<boolean> {
  try {
    const response = await User.updateOne({ userId: data.userId }, data.value);
    return true;
  } catch (err: unknown) {
    console.error("Error updating document:", err);
    return false;
  }
}
