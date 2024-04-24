"use strict";
import express, {
  Request,
  Response,
} from 'express';

import { deleteOneUser } from '../controllers/deleteUserController';

const router = express.Router();

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.send("wrong method!");
  })
  .post(async (req: Request, res: Response) => {
    const response = await deleteOneUser(req.body.id);
    res.json({
      message: response,
      status: response ? 200 : 400,
    });
  });

export default router;
