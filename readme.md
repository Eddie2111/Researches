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

## Objectives

The primary objective of this project is to develop a dynamic load balancing strategy that optimizes the distribution of incoming requests across multiple Redis instances to improve system efficiency and performance. Specific goals include:

1. **Enhanced Resource Utilization**: Implement a load balancing mechanism that dynamically allocates requests to the least utilized Redis instances based on real-time metrics like memory usage, thereby maximizing resource efficiency.
   
2. **Scalability and Fault Tolerance**: Design the system to scale seamlessly with increasing loads by adding resources dynamically. This includes ensuring high availability and reliability even in the face of component failures or disruptions.

3. **Optimized System Performance**: Achieve low response times and high throughput under various load conditions, ensuring the system's capability to handle large-scale distributed caching workloads efficiently.

4. **Containerization and Microservices Architecture**: Utilize Docker for containerization to simplify deployment and enhance the manageability of the system across different environments. This approach supports a microservices architecture that allows individual components to be scaled and updated independently.

5. **Algorithmic Efficiency**: Develop and implement algorithms that can intelligently decide the best Redis instance for storing new data, thus balancing the load across the cluster without overwhelming any single instance.

6. **Development of Robust API Endpoints**: Structure robust API endpoints that map to respective controllers for managing user data operations efficiently, thereby facilitating seamless interactions between the front end and the server.

The end goal is to establish a prototype that demonstrates these capabilities in a real-world scenario, paving the way for further research and development in dynamic load balancing within distributed systems.