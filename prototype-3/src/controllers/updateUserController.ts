"use strict";
import { z } from 'zod';

import { mainToClusterInsert } from '../lib/clusterConnections';
import { userSchema } from '../schema/user';

export async function UpdateUser(
  data: z.infer<typeof userSchema>
): Promise<boolean> {
  try {
    const response = await mainToClusterInsert(data);
    return true;
  } catch (err: unknown) {
    console.error("Error updating document:", err);
    return false;
  }
}
