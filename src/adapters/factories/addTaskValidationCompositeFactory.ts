import { DateValidatorAdapter } from "../dateValidatorAdapter";
import { Validation } from "../interfaces/validation";
import { DateValidation } from "../validations/dateValidation";
import { RequiredFieldsValidation } from "../validations/requiredFieldsValidation";
import { ValidationComposite } from "../validations/validationComposite";

export const addTaskValidationCompositeFactory=():ValidationComposite => {
  const validations: Validation[] = [];
  //todo validation required fields
  for (const field of ["title", "description", "date"]) {
    validations.push(new RequiredFieldsValidation(field));
  }

  //todo validation date validation
  validations.push(new DateValidation("date", new DateValidatorAdapter()));
  
  return new ValidationComposite(validations);
};
