import dotenv from "dotenv";
import express from 'express';
import healthRouter from "./routes/health-router";
import peopleRouter from "./routes/people-router";

dotenv.config();

const app = express();

app.use(healthRouter);
app.use(peopleRouter);

const PORT: number | string = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});