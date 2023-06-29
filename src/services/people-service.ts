import { noResults } from "../errors/noResults-error";
import peopleRepository from "../repositories/people-repository";

async function getPeople() {
    const peopleResult = await peopleRepository.getPeople();

    if(peopleResult.rows.length < 1) {
        throw noResults();
    }

    return peopleResult.rows;
};

const peopleService = {
    getPeople,
};

export default peopleService;