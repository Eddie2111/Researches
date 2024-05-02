"use strict";
import express, {
  Request,
  Response,
} from 'express';

import { UpdateUser } from '../controllers/updateUserController';

const router = express.Router();

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.send("wrong method!");
  })
  .post(async (req: Request, res: Response) => {
    const response = await UpdateUser(req.body);
    res.json({
      message: response,
      status: response ? 200 : 400,
    });
  });

export default router;
