import { CalculatorResultDto } from "types";
import { CalculatorController } from "../controllers";
import { Request, Router } from "express";

export class CalculatorRouter {
     static basePath = "/calculator";
     router: Router;

     constructor(private calculatorController: CalculatorController) {
          this.router = Router();
          this.getCalculators();
     }

     private getCalculators() {
          /**
           * @openapi
           * /calculator
           *   get:
           *      description: Get all calculations
           *      operationId:getAllCalculations
           *      tags:
           *        - calculator
           *      responses:
           *        '200':
           *           description:OK
           *           content:
           *               application/json:
           *                 schema:
           *                    type:array
           *                    items:
           *                       $ref:'#/components/schemas/CalculatorResult
           *         '500':
           *           $ref:'#/components/responses/InternalServiceError
           */
          this.router.get("/", async (req: Request<{}, CalculatorResultDto>, res) => {
            // res.send("going to CalculatorController")
          });
     }
}
