import { Calculator } from "../../models";
import { CalculatorCommandOperator, Dao } from "../../types";

interface MockCalculatorDbData {
     id: string;
     res?: number;
     msg?: string;
     opr: "+" | "/" | "-" | "*";
     op1: number;
     op2: number;
     ts: number;
}

const mockDb: { [id: string]: MockCalculatorDbData } = {
     "1": {
          id: "1",
          res: 13,
          msg: "",
          opr: "+",
          op1: 10,
          op2: 3,
          ts: 1688612539479,
     },
     "2": {
          id: "2",
          res: 30,
          msg: "",
          opr: "+",
          op1: 20,
          op2: 10,
          ts: 1688612539479,
     },
     "3": {
          id: "3",
          res: 19,
          msg: "",
          opr: "+",
          op1: 10,
          op2: 9,
          ts: 1688612539479,
     },
     "4": {
          id: "4",
          res: 28,
          msg: "",
          opr: "+",
          op1: 18,
          op2: 10,
          ts: 1688612539479,
     },
};

export class MockCalculatorDao implements Dao<Calculator> {
     private _counter = 3;

     async create(calculator: Calculator): Promise<Calculator> {
          const calculationPersistence = this.toPersistence(calculator);
          mockDb[calculationPersistence.id] = calculationPersistence;
          return this.toDomain(calculationPersistence);
     }

     async read(id: string): Promise<Calculator | undefined> {
          const result = mockDb[id];
          return result ? this.toDomain(result) : undefined;
     }
     delete(id: string): Promise<void> {
          delete mockDb[id];
          return;
     }
     list(): Promise<Calculator[]> {
          return new Promise(function (resolve, reject) {
               () =>
                    resolve(
                         Object.values(mockDb).map((calculationPersistence) =>
                              this.toDomain(calculationPersistence)
                         )
                    );
          });
     }
     upsert(id: string, value: Calculator): Promise<Calculator> {
          return new Promise(function (resolve, reject) {
               setTimeout(() => {
                    const calculationPersistence = {
                         ...this.toPersistence(value),
                         ts: this.getCurrentTimestamp(),
                    };
                    mockDb[id] = calculationPersistence;
                    resolve(this.toDomain(calculationPersistence));
               }, 1000);
          });
     }
     private generateId = () => (this._counter++).toString();
     private getCurrentTimestamp = (): number => Date.now();
     private toPersistence(calculator: Calculator): MockCalculatorDbData {
          return {
               id: calculator.metadata?.id ?? this.generateId(),
               res: calculator.result?.value,
               msg: calculator.result?.message,
               opr: calculator.command.operator,
               op1: calculator.command.operand1,
               op2: calculator.command.operand2,
               ts: calculator.metadata?.timestamp ?? this.getCurrentTimestamp(),
          };
     }
     private static dbOperationMapping = Object.values(CalculatorCommandOperator).reduce(
          (mapping, value) => ({
               ...mapping,
               [value]: value,
          }),
          {}
     ) as { [k in CalculatorCommandOperator]: CalculatorCommandOperator };

     
     private toDomain(calculationPersistence: MockCalculatorDbData): Calculator {
          const { id, res, msg, opr, op1, op2, ts } = calculationPersistence;
          return new Calculator(
               {
                    operator: MockCalculatorDao.dbOperationMapping[opr],
                    operand1: op1,
                    operand2: op2,
               },
               { id, timestamp: ts },
               {
                    value: res,
                    message: msg,
               }
          );
     }
}
