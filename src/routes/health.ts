import { Request, Router } from "express";

import { HealthResponseDto } from "../types";

export const router = Router();

/**
 * @openai
 * /health
 *    get:
 *      description: Health check endpoint for calculator API
 *      operationId:healthCheck
 *      tags:
 *        -health
 *      responses:
 *        '200':
 *          description:OK
 *          content:
 *            application/json
 *              schema:
 *                 $ref:"#/components/schemas/HealthStatus"
 *        '500':
 *          $ref:"#/components/schemas/InternalServerError"
 */
router.get('/', (req:Request<{}, HealthResponseDto>, res)=>{
    res.send({ status:"OK" , timestamp: req.timestamp});
})
