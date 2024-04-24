"use strict";
import express, {
  Request,
  Response,
} from 'express';

import { getAllUsers } from '../controllers/getAllUserController';

const router = express.Router();

router
  .route("/")
  .get(async (req: Request, res: Response) => {
    try {
      const response = await getAllUsers();
      res.json({
        data: response,
        status: response ? 200 : 400,
      });
    } catch (err: unknown) {
      res.json({
        data: [],
        status: 400,
      });
    }
  })
  .post((req: Request, res: Response) => {
    console.log(req.body);
    res.send("test ok");
  });

export default router;
