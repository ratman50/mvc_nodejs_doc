import  express, { NextFunction } from "express";
import createHttpError from "http-errors";
import "express-async-errors";
import { logger, addTimestamp, errorHandler } from "./middlewares";
import { healthRouter } from "./routes";



const app = express();
const port=3000;

app.use(express.json());
app.use(addTimestamp);
app.use(logger);




//defining routes

app.use("/health", healthRouter);


//handle route not defined
app.use((req, res, next:NextFunction)=>{
    
    next(createHttpError(404, "Route not found"));
});


app.use(errorHandler);




app.listen(port,()=>{
    console.log(`Server is running on  url  http://localhost:${port}/`);
});