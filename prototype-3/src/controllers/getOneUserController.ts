"use strict";
import { mainToClusterRetrieval } from '../lib/clusterConnections';

export async function getOneUser(id: string): Promise<any> {
  try {
    return await mainToClusterRetrieval(id);
  } catch (err: unknown) {
    console.log(err);
    return [];
  }
}
