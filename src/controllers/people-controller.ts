import { Request, Response } from "express";
import httpStatus from "http-status";
import peopleService from "../services/people-service";

async function getPeople(req: Request, res: Response) {
    try {
        const people = await peopleService.getPeople();
        
        return res.status(httpStatus.OK).send(people);
    } catch (error) {
        if(error.type === "noResults") {
            return res.status(httpStatus.NOT_FOUND).send(error.message);
        }

        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
    }
}

const peopleController = {
    getPeople,
}

export default peopleController;