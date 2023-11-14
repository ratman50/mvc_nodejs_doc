import Logging from "library/Loggin";
import {Request, Response, NextFunction} from "express";


export function errorHandler(err:any, req:Request, res:Response, next:NextFunction){
 Logging.error(err.stack);
//  res.status(err.status || 500).json({error:err.message});   
}