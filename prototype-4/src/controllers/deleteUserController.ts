"use strict";
import { mainToClusterRemove } from "../lib/clusterConnections";

export async function deleteOneUser(id: string): Promise<boolean> {
  try {
    const response = await mainToClusterRemove(id);
    return response;
  } catch (err: unknown) {
    console.log(err);
    return false;
  }
}
