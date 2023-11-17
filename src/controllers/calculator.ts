import { CalculatorResultDto } from "types";
import Controller from "../types/controller";
import { CalculatorMapper } from "mappers";
import { Dao} from "../types";
import { Calculator } from "../models";


export class CalculatorController {
    constructor(private _calculatorDao:Dao<Calculator>){}

    async getAllCalculations():Promise<CalculatorResultDto[]> {
        const allcalculations=await this._calculatorDao.list();
        return allcalculations.map(calculator => CalculatorMapper.toDto(calculator));
    }

}
