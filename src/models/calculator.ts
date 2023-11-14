import { CalculatorCommand, CalculatorCommandOperator, CalculatorMetadata, CalculatorResult } from "../types";

export class Calculator{
    constructor(
        public command:CalculatorCommand,
        public metadata:CalculatorMetadata,
        public result:CalculatorResult
    ){
        this.execute();
        this.validate();
    }
    private validate():void{
        if(this.result?.message === undefined && this.result?.value === undefined){
            throw new Error('Invalid calculator result');
        }
    }
    private execute():void{
        if(this.result!==undefined)
        {
            return;
        }
        const {operator, operand1, operand2}=this.command;
        let result:number|undefined ;
        switch(operator){
            case CalculatorCommandOperator.Add:
                result=operand1+operand2;
                break;
            case CalculatorCommandOperator.Subtract:
                result=operand1-operand2;
                break;
            case CalculatorCommandOperator.Multiply:
                result=operand1*operand2;
                break;
            case CalculatorCommandOperator.Divide:
                result=operand1/operand2;
                break;
        }
        this.result={
            value:result,
            message:undefined
        }
    }
}