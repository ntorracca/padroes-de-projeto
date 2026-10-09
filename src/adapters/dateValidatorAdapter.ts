import validator from "validator";
import { DateValidator } from "./interfaces/dateValidator";

export class DateValidatorAdapter implements DateValidator {
  isValid(date: string): boolean {
    // Implementation for date validation
    return validator.isDate(date, {
      format: "DD-MM-YYYY",
    }); 
  }
}