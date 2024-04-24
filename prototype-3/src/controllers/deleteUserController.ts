"use strict";
import { User } from '../schema/user';

export async function deleteOneUser(id: string): Promise<boolean> {
  try {
    const structure = await User.deleteOne({ userId: id });
    return true;
  } catch (err: unknown) {
    console.log(err);
    return false;
  }
}
