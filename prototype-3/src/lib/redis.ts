"use strict";
import dotenv from 'dotenv';
import { Redis } from 'ioredis';

dotenv.config();
let redis: Redis | undefined;

export function Connect(url: string): void {
  if (!redis) {
    redis = new Redis(url || " ") as Redis;
    if (url.includes("5000")) {
      console.log("main cache connected");
    }
    if (url.includes("5200" || "5300" || "5400" || "5500")) {
      console.log("cluster caches found");
    }
  }
}

export function Connect_cache(url: string) {
  let conn: Redis | undefined;
  try {
    conn = new Redis(url || " ") as Redis;
    return conn;
  } catch (err) {
    console.log("Error creating connection for ", url);
    return conn;
  }
}

export function getRedisInstance() {
  if (!redis) {
    throw new Error("Redis connection has not been established yet.");
  }
  return redis;
}
