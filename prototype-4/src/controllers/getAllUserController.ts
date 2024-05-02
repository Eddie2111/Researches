"use strict";

interface IresponseProps {
  totalCount: string;
  users: string;
}

export async function getAllUsers(): Promise<IresponseProps> {
  try {
    return {
      totalCount: "Not available",
      users: "Not available",
    };
  } catch (err: unknown) {
    console.log(err);
    return {
      totalCount: "Not available",
      users: "Not available",
    };
  }
}
