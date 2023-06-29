import connection from "../database/database";

async function getPeople() {
    const result = await connection.query("SELECT * FROM people");
    let id: number = 0;
    
    while(id === 0) {
        id = Math.floor(Math.random() * result.rows.length);
    }

    return connection.query(`SELECT * FROM people WHERE id = ${id}`);
}

const peopleRepository = { 
    getPeople,
}

export default peopleRepository;