import Logging from "../library/Loggin";
import { Request, Response, NextFunction } from "express";
import { ErrorDto } from "types";

export function errorHandler(err: any, req: Request, res: Response<ErrorDto>, next: NextFunction) {
     Logging.error(err.stack);
     res.status(err.status || 500)
     .send({message: err.message || 'Internal Server Error'})

}
