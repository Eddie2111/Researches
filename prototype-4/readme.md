# Project Documentation

## Overview

This document provides an overview of the Node.js application designed to manage user data. The application utilizes various tools, modules, and packages to perform CRUD operations (Create, Read, Update, Delete) on user entities. A Go worker is also built for monitoring and generating database logs by getting the data from the mongoDB database.

## Application Architecture

The application is built using Node.js, leveraging Express.js as the web framework. It interacts with MongoDB for persistent data storage. TypeScript is used for type safety and improved code maintainability.
TSC is used to transpile the JS to TS from `/src` to `/dist` while npm is used to add or remove dependency.
ExpressJS is used for building the API.

The worker is built using GoLang, with mongo drivers attached. The worker fetches and analyzes the present data in the database by connecting to the mongoDB instance running in the docker containers.

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
6. **mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.
7. **nodemon**: Utility that automatically restarts the Node.js application when file changes are detected.
8. **zod**: TypeScript-first schema declaration and validation library.

### imports for GoLang: This section imports required packages into the program. Each package serves a specific purpose in interacting with MongoDB

1. context: Provides support for cancellation and timeouts in the program.
2. fmt: Provides formatted I/O functions.
3. log: Provides logging functionalities.
4. time: Provides functionality for working with time.
5. go.mongodb.org/mongo-driver/bson: Provides functionality for encoding and decoding BSON (Binary JSON) data, which is the data format used by MongoDB.
6. go.mongodb.org/mongo-driver/mongo: Provides functionalities to interact with MongoDB databases.
7. go.mongodb.org/mongo-driver/mongo/options: Provides options for configuring MongoDB operations.

### Package functionalities for Go worker

1. context.Context: It's used to set deadlines, cancelation signals, and carry request-scoped values across API boundaries and between processes.
2. fmt, log, time: These standard packages provide functionalities for formatting, logging, and working with time respectively. They are not specifically related to MongoDB interactions but may be used within the program for general purposes.
3. go.mongodb.org/mongo-driver/bson: This package provides functions to work with BSON data, such as encoding Go structs into BSON format or decoding BSON data into Go structs.
4. go.mongodb.org/mongo-driver/mongo: This package provides functionalities to interact with MongoDB databases, including CRUD (Create, Read, Update, Delete) operations, database management, aggregation pipelines, etc.
5. go.mongodb.org/mongo-driver/mongo/options: This package provides various options for configuring MongoDB operations, such as setting timeouts, specifying write concerns, defining read preferences, etc.

## Docker and MongoDB

Docker is utilized to containerize the MongoDB instances. The latest image from MongoDB is ran using this command
`docker run -d -p 5700:27017 --name mongodb mongo:latest`

## Routes

The following routes are available for user-related operations:

1. **createUser** [@/createUser]: Endpoint for creating a new user.

- Example post request body

```JSON
{
    "name" : "test name",
    "email": "test@test.com",
    "userId": "1234-1234-1234"
}
```

2. **getOneUser** [@/getOneUser]: Endpoint for retrieving details of a specific user by their ID.

- example of post request body

```JSON
{
    "userId": "1234-1234-1234"
}
```

3. **getAllUsers** [@/getAllusers]:: Endpoint for fetching details of all users.

- only a get request

4. **updateUser** [@/updateUser]: Endpoint for updating details of an existing user.

- example of post request body

```JSON
{
    userId:"1234-1234-1234",
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
    "userId": "1234-1234-1234"
}
```

## Starting the project

- A mongoDB instance has to be ran before initiating the project
  Run,
  `docker run -d -p 5700:27017 --name mongodb mongo`
  This will create a mongoDB instance in the docker that we can use to communicate for data.

- The nodeapp has to be ran from inside the folder
  `cd userapp`
  `npm i`
  `npm start`

- The GoLang worker has to be ran from inside the `worker` folder.
  `cd worker`
  `go main.go`

The exposed port for api is at localhost,
`3000/http`
