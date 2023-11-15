import { NextFunction, Request, Response } from "express";
import Logging from "../library/Loggin";

export function logger(req: Request, res: Response, next: NextFunction){
  /**log the request */
          Logging.info(
               `Incomming -> Method : [${req.method}] - Url:[${req.url}] - IP: [${req.socket.remoteAddress}]`
          );
            
        //   res.on("finish", () => {
        //        /**Log the Response */
        //        Logging.info(
        //             `Incomming -> Method : [${req.method}] - Url:[${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS:[${res.STATUS}]`
        //        );
        //   });
        next()
        }