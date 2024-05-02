"use strict";
import express, {
  Request,
  Response,
} from 'express';

import { CreateUser } from '../controllers/createUserController';

const router = express.Router();

router
  .route("/")
  .get(async (req: Request, res: Response) => {
    res.send("incorrect method");
  })
  .post(async (req: Request, res: Response) => {
    const response = await CreateUser(req.body);
    res.json({
      message: response,
      status: response ? 200 : 400,
    });
  });

export default router;
