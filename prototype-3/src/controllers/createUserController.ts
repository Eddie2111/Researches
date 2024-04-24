"use strict";
import axios from 'axios';

import {
  cluster_insert,
  main_cluster_insert,
} from '../lib/clusterConnections';
import {
  IUser,
  userSchema,
} from '../schema/user';

// Defined the interface for the response from the Go server
interface GoResponse {
  data: {
    port: string;
  };
}

// Define the function to create a user
export async function CreateUser(data: Partial<IUser>): Promise<boolean> {
  try {
    try {
      const parsed = userSchema.parse(data);

      // get the unused db port from go worker
      const leastUsedRedis: GoResponse = await axios.get(
        "http://localhost:8000"
      );

      // store the location on main_cache
      const response1 = await main_cluster_insert(
        parsed.username,
        leastUsedRedis.data.port
      );

      // store the data on least used redis instance
      const response2 = await cluster_insert(leastUsedRedis.data.port, parsed);

      // assuring and logging the success message
      console.log(parsed, "stored at", leastUsedRedis.data.port);
      return true;
    } catch (err) {
      // a single or more task failure
      console.log(err);
      return false;
    }
  } catch (err: unknown) {
    // connection based error
    console.log(err);
    return false;
  }
}

/*
/**
 * an interface a way to define a data type
 * an interface supports type overloading and type combination
 * this gives significant advantage over using only "type" to 
 * define a variable.
 * 
 * use strict over the file is used to handle strict variable 
 * declaration and reducing variable over usage and re-assignment.
 * Plus, alerts for unused variables and functions.
 */
