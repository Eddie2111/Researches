import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { rateLimit } from 'express-rate-limit';

import { corsOptions } from './configs/config';
import {
  cacheClusters,
  main_Cluster,
} from './lib/clusterConnections';
import { Connect_cache } from './lib/redis';
// routes
import createUserRouter from './routes/createUser';
import deleteUserRouter from './routes/deleteUser';
import getUser from './routes/getUser';
import getAllUser from './routes/getusers';
import updateOneUser from './routes/updateUser';

const app: express.Application = express();

const port = process.env.PORT || 3100;

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
    legacyHeaders: false,
  })
);

app.use("/createUser", cors(corsOptions), createUserRouter);
app.use("/deleteUser", cors(corsOptions), deleteUserRouter);
app.use("/getUser", cors(corsOptions), getUser);
app.use("/getAllUsers", cors(corsOptions), getAllUser);
app.use("/updateUser", cors(corsOptions), updateOneUser);

app.listen(port, async (): Promise<void> => {
  Connect_cache("redis://localhost:5000");
  main_Cluster();
  cacheClusters();
  console.log("Server started at", port);
});
