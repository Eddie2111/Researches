"use strict";
// import { cluster_insert } from "../lib/clusterConnections"

export async function UpdateUser(data: IData): Promise<boolean> {
  try {
    const response = true;
    return true;
  } catch (err: unknown) {
    console.error("Error updating document:", err);
    return false;
  }
}
