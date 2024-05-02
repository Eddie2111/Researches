import cors from "cors";
import express from "express";

// import { rateLimit } from 'express-rate-limit';
import { corsOptions } from "./configs/config";
import { main_Cluster } from "./lib/clusterConnections";
import createUserRouter from "./routes/createUser";
import deleteUserRouter from "./routes/deleteUser";
import getUser from "./routes/getUser";
import getAllUser from "./routes/getusers";
import updateOneUser from "./routes/updateUser";

const app: express.Application = express();

const port = process.env.PORT || 3100;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(
//   rateLimit({
//     windowMs: 15 * 60 * 1000,
//     limit: 100,
//     standardHeaders: "draft-7",
//     legacyHeaders: false,
//   })
// );

app.use("/createUser", cors(corsOptions), createUserRouter);
app.use("/deleteUser", cors(corsOptions), deleteUserRouter);
app.use("/getUser", cors(corsOptions), getUser);
app.use("/getAllUsers", cors(corsOptions), getAllUser);
app.use("/updateUser", cors(corsOptions), updateOneUser);

app.listen(port, async (): Promise<void> => {
  // Connect_cache("redis://localhost:5001");
  main_Cluster();
  console.log("Server started at", port);
});
