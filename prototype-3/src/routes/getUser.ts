"use strict";
import express, {
  Request,
  Response,
} from 'express';

import { getOneUser } from '../controllers/getOneUserController';

const router = express.Router();

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.send("wrong method used");
  })
  .post(async (req: Request, res: Response) => {
    const response = await getOneUser(req.body.id);
    res.json({
      data: response,
      message: "user fetched",
      status: response.length > 0 ? 200 : 400,
    });
  });

export default router;
