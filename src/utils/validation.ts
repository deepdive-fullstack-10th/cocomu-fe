export class ValidationResult {
  constructor(
    public isValid: boolean,
    public message?: string,
  ) {}

  static success() {
    return new ValidationResult(true);
  }

  static failure(message: string) {
    return new ValidationResult(false, message);
  }
}

export interface FieldValidator {
  onChange?: (value: string) => ValidationResult;
  onBlur?: (value: string) => ValidationResult;
  onSubmit?: (value: string) => ValidationResult;
}

export interface ValidationRules {
  [field: string]: FieldValidator;
}
