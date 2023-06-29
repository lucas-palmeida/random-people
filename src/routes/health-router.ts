import { Router, Request, Response } from "express";
import httpStatus from "http-status";

const healthRouter = Router();

healthRouter.get("/health", (req: Request, res: Response) => {
    res.status(httpStatus.OK).send("I'm fine");
});

export default healthRouter;