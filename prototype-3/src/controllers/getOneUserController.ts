"use strict";
import { mainToClusterRetrieval } from "../lib/clusterConnections";

export async function getOneUser(id: string): Promise<any> {
  try {
    const data = await mainToClusterRetrieval(id);
    console.log(data);
    return data;
  } catch (err: unknown) {
    console.log(err);
    return [];
  }
}
