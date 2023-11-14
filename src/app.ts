import  express from "express";
import "express-async-errors";
import { logger } from "./middlewares";



const app = express();
const port=3000;

app.use(express.json());

app.use(logger);
