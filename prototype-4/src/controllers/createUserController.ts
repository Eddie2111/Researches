"use strict";
import { z } from 'zod';

import { mainToClusterInsert } from '../lib/clusterConnections';
import { userSchema } from '../schema/user';

// * Defined the interface for the response from the Go server
interface GoResponse {
  data: {
    port: string;
  };
}

// *Defined the function to create a user
export async function CreateUser(
  data: Partial<z.infer<typeof userSchema>>
): Promise<boolean> {
  try {
    try {
      const parsed = userSchema.parse(data);
      mainToClusterInsert(parsed);
      return true;
    } catch (err) {
      // input valdiation failure
      console.log(err);
      return false;
    }
  } catch (err: unknown) {
    // connection based error
    console.log(err);
    return false;
  }
}
