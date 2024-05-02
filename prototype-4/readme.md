# Project Documentation

## Overview

This document provides an overview of the Node.js application designed to manage user data. The application utilizes various tools, modules, and packages to perform CRUD operations (Create, Read, Update, Delete) on user entities. A Go worker is also built for monitoring and generating database logs by getting the data from the clustered Redis caches.

## Application Architecture

The application is built using Node.js, leveraging Express.js as the web framework. It interacts with Redis for caching. TypeScript is used for type safety and improved code maintainability.
TSC is used to transpile the JS to TS from `/src` to `/dist` while npm is used to add or remove dependency.
ExpressJS is used for building the API.

The worker is built using GoLang, with no drivers attached but only one single functional mutex. The worker fetches and analyzes the system memory in the docker containers. The least used memory
cluster is selected for use and returned as response of the node app's request.

There are one Redis instance working as main and where 4 redis instances are working as clusters that storing the acutal data. Main redis cache is only storing the key.

## Dependencies

### Development Dependencies [RestAPI]

1. **@types/cors**: Type definitions for CORS (Cross-Origin Resource Sharing) middleware.
2. **@types/express**: Type definitions for Express.js framework.
3. **@types/node**: Type definitions for Node.js.
4. **typescript**: TypeScript compiler for type-checking and compiling TypeScript code.

### Production Dependencies [RestAPI]

1. **cors**: Middleware for enabling CORS in Express.js.
2. **dotenv**: Loads environment variables from a `.env` file into `process.env`.
3. **express**: Web framework for Node.js, used for routing and handling HTTP requests.
4. **express-rate-limit**: Middleware for rate limiting HTTP requests.
5. **fs**: File system module for reading and writing files.
6. **ioredis**: Redis cache interaction tool.
7. **nodemon**: Utility that automatically restarts the Node.js application when file changes are detected.
8. **zod**: TypeScript-first schema declaration and validation library.

### imports for GoLang: This section imports required packages into the program.

1. context: Provides support for cancellation and timeouts in the program.
2. fmt: Provides formatted I/O functions.
3. log: Provides logging functionalities.
4. time: Provides functionality for working with time.

### Package functionalities for Go worker

1. context.Context: It's used to set deadlines, cancelation signals, and carry request-scoped values across API boundaries and between processes.
2. fmt, log, time: These standard packages provide functionalities for formatting, logging, and working with time respectively. They are not specifically related to Redis/Cluster interactions but may be used within the program for general purposes.

## Docker and Redis

Docker is utilized to containerize the Redis instances. The latest image from Redis is ran using this command
`docker run -d -p 5000:6379 --name redis redis:latest`

## Routes

The following routes are available for user-related operations:

1. **createUser** [@/createUser]: Endpoint for creating a new user.

- Example post request body

```JSON
{
    "name" : "test name",
    "email": "test@test.com",
    "username": "1234-1234-1234"
}
```

2. **getOneUser** [@/getOneUser]: Endpoint for retrieving details of a specific user by their ID.

- example of post request body

```JSON
{
    "username": "1234-1234-1234"
}
```

3. **getAllUsers** [@/getAllusers]:: Endpoint for fetching details of all users.

- only a get request

4. **updateUser** [@/updateUser]: Endpoint for updating details of an existing user.

- example of post request body

```JSON
{
    username:"1234-1234-1234",
    data: {
        "name" : "test name",
        "email": "test@test.com",
    }
}
```

5. **deleteUser** [@/deleteUser]:: Endpoint for deleting a user by their ID.

- example of post request body

```JSON
{
    "username": "1234-1234-1234"
}
```

## Starting the project

- Please use prototype-4 to run and test.
- You require docker with redis instance in it.

- Navigate to prototype-4, start docker in your local machine and open your terminal.

- run the docker containers by `cd services` and then `docker-compose up` in your terminal from the root folder
- run the go worker by `cd worker` and then `go run main.go` in the terminal from the root folder
- run the node app by `npm run dev` in the terminal from the root folder
