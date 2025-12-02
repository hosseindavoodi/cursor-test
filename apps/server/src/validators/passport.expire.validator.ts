import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isNotExpired', async: false })
export class IsNotExpiredConstraint implements ValidatorConstraintInterface {
  validate(isoDateString: string, args: ValidationArguments): boolean {
    // Convert ISO date string to Date object
    const expireDate = new Date(isoDateString);
    // Check if the date is valid
    if (isNaN(expireDate.getTime())) {
      return false; // Invalid date string
    }

    // Compare with current date/time
    return expireDate.getTime() > Date.now();
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} is expired.`;
  }
}

export function IsNotExpired(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isNotExpired',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNotExpiredConstraint,
    });
  };
}
