import { CalculatorResultDto } from "../types";
import { Calculator} from "../models";
import { CalculatorCommandMapper } from "./calculatorCommand";


export const CalculatorMapper={
    toDto(domain: Calculator):CalculatorResultDto{
        const {command, result, metadata} = domain;
        if(!metadata || !result)
            throw new Error("Invalid calculator domain");
        return {
            id:metadata.id,
            timestamp:metadata.timestamp,
            result:result.value,
            message:result.message,
            ...CalculatorCommandMapper.toDto(command)
        }

    }
}