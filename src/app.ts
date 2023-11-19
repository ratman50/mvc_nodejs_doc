import  express, { NextFunction } from "express";
import createHttpError from "http-errors";
import "express-async-errors";
import { logger, addTimestamp, errorHandler, openApiValidator } from "./middlewares";
import { apiDocRouter, healthRouter } from "./routes";
import cors from "cors";



const app = express();
const port=3000;

app.use(express.json());
app.use(addTimestamp);
app.use(logger);
app.use(openApiValidator); 
app.use(cors());




//defining routes

app.use("/api/health", healthRouter);
app.use("/api-docs", apiDocRouter);

//handle route not defined
app.use((req, res, next:NextFunction)=>{
    
    next(createHttpError(404, "Route not found"));
});


app.use(errorHandler);




app.listen(port,()=>{
    console.log(`Server is running on  url  http://localhost:${port}/`);
});