import { CalculatorResultDto } from "types";
import { CalculatorController } from "../controllers";
import { Request, Router } from "express";

export class CalculatorRouter {
     static basePath = "/calculator";
     router: Router;

     constructor(private calculatorController: CalculatorController) {
          this.router = Router();
          this.getAllCalculations();
     }

     private getAllCalculations() {
          /**
           * @openapi
           * /calculator:
           *   get:
           *     description: Récupère tous les calculs
           *     operationId: getAllCalculations
           *     tags:
           *       - calculator
           *     responses:
           *       '200':
           *         description: OK
           *         content:
           *           application/json:
           *             schema:
           *               type: array
           *               items:
           *                 $ref: "#/components/schemas/CalculatorResult"
           *       '500':
           *         $ref: '#/components/responses/InternalServerError'
           */
          this.router.get("/", async (req: Request<{}, CalculatorResultDto>, res) => {
            // res.send("going to CalculatorController")
          });
     }
}
