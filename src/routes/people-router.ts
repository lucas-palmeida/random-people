import peopleController from "../controllers/people-controller";
import { Router } from "express";

const peopleRouter = Router();

peopleRouter.get("/people", peopleController.getPeople);

export default peopleRouter;