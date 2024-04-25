import axios from "axios";
//! this file requires significant improvement using class object approach
//! taking up a massive payload of 119
//! convert to mjs/cjs if possible
import { z } from "zod";

import { userSchema } from "../schema/user";
// import the connection by getInstance
import { Connect_cache } from "./redis";

// state main redis url in a string
const mainCache: string = "redis://localhost:5000";

// state 4 redis urls in a array
const clusterCaches: string[] = [
  // approximate first storage initiation
  "redis://localhost:5300", // 23 kb
  "redis://localhost:5400", // 34 kb
  "redis://localhost:5500", // 52 kb
  "redis://localhost:5600", // 16 kb
];

// call all the clusters
let main: any = [];
let main_conn: any;

// call the cluster instances
export const cacheClusters = () => {
  console.log("cluster caches connected");
  clusterCaches.forEach((items: string, index: number) => {
    const temp = Connect_cache(items);
    main.push(temp);
    console.log("cluster count->", index, items);
  });
  return main;
};

// call the main cluster
export const main_Cluster = () => {
  if (!main_conn) {
    main_conn = Connect_cache(mainCache);
    return main_conn;
  } else {
    return main_conn;
  }
};

// select and insert the data based on the port number provided
export const main_cluster_insert = (key: string, location: string) => {
  try {
    // Corrected: key is the first argument, location is the second argument
    main_conn.setex(key, 60 * 60 * 4, location);
    return true;
  } catch (err: unknown) {
    return false;
  }
};

// select and insert the data based on the port number provided
export const cluster_insert = (
  port: string,
  data: z.infer<typeof userSchema>
) => {
  try {
    let portToAdd: any;
    clusterCaches.forEach((items: string, index: number) => {
      if (items.includes(port)) {
        portToAdd = main[index];
      }
    });
    // Corrected: key is the first argument, value is the second argument
    portToAdd.setex(data.username, 60 * 60 * 4, JSON.stringify(data));
    return true;
  } catch (err: unknown) {
    return false;
  }
};

interface GoResponse {
  data: {
    port: string;
  };
}

export const mainToClusterInsert = async (
  parsed: z.infer<typeof userSchema>
) => {
  try {
    const leastUsedRedis: GoResponse = await axios.get("http://localhost:8000");
    const response1 = await main_cluster_insert(
      parsed.username,
      leastUsedRedis.data.port
    );
    const response2 = await cluster_insert(leastUsedRedis.data.port, parsed);
    console.log(parsed, "stored at", leastUsedRedis.data.port);
    return true;
  } catch (err: unknown) {
    console.log(err);
    return false;
  }
};

// getting a data using the combination of main to cluster function
export const mainToClusterRetrieval = async (key: string) => {
  let portToGet: any;
  try {
    // using the key to get the location from the main cache
    const location = await main_conn.get(key);

    // running a loop to find the index of the location from clusterCaches
    clusterCaches.forEach((items: string, index: number) => {
      if (items.includes(location)) {
        // getting the cached connection string
        portToGet = main[index];
      }
    });

    // getting the data from the clusters
    const response = await portToGet.get(key);
    // redis stores and returns string as data,
    // it is required to JSONify the data as http accepts JSON responses
    return JSON.parse(response);
  } catch (err) {
    // this is in case no data is found or transaction error
    // transaction means chain execution
    return {};
  }
};

export const mainToClusterRemove = async (key: string) => {
  let portToGet: any;
  try {
    // getting the location of the key
    const location = await main_conn.get(key);
    clusterCaches.forEach((items: string, index: number) => {
      if (items.includes(location)) {
        // getting the cached connection string
        portToGet = main[index];
      }
    });
    // removing the value using the key from the clusters
    const response_1 = portToGet.delete(key);
    console.log(location, response_1);
    return true;
  } catch (err: unknown) {
    // handling operational errors
    console.log(err);
    return false;
  }
};

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
