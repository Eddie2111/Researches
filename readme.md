# Distributed Caching system using Redis and Docker

## Overview
The "Dynamic Load Balancing Strategies for Distributed Cache Systems" project leverages cutting-edge technology stacks including Node.js, TypeScript, and Redis, along with a Go-based worker component to enhance web application performance through efficient load distribution. The architecture integrates Node.js and Express with TypeScript to handle user operations robustly, utilizing Redis for advanced caching mechanisms. The configuration is designed to be scalable and fault-tolerant, addressing core needs such as cookie handling, Cross-Origin Resource Sharing (CORS), and session management.

## Prototype-1

- Attempted to use nestJS
- NestJS allowsone redis connection at a time, which could be achieved using microservices.
- Dumped due to time requirements

## Prototype-2

- NodeJS with pure JS was attempted to use with no external modules.
- Dumped due to type safety and time requirements

## Prototype-3

- Built using NodeJS with typescript for additonal typesafety.
- No bugs or transpillation errors.
- Single instance of redis connected.

## Prototype-4

- Built using NodeJS with typescript for additonal typesafety.
- A Go worker used with memory Mutex function for memory calculation.
- Clustered redis connections under docker with one main redis instance.

## request_worker

- Built using python to generate and send custom payloads at custom load and speed.
- Able to dump request logs and further processing the logs.
- A report python notebook is also present to run ML logics and algorithms to predict or data visualization.

## To start the project->

- Please use prototype-4 to run and test.
- You require docker with redis instance in it.
- Navigate to prototype-4, start docker in your local machine and open your terminal.
- run the docker containers by `cd services` and then `docker-compose up` in your terminal from the root folder
- run the go worker by `cd worker` and then `go run main.go` in the terminal from the root folder
- run the node app by `npm run dev` in the terminal from the root folder

## Service ports

- Node will run at localhost:3100
- Go worker will run at localhost:8000
- Main redis cache will run at localhost:5000
- clusters available at localhost : [5300,5400,5500,5600]
