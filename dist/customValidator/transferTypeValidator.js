"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferTypeValidator = void 0;
const class_validator_1 = require("class-validator");
function TransferTypeValidator(property, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            name: 'transferTypeValidator',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    let isValid = true;
                    if (typeof value === 'string' && typeof relatedValue === 'number') {
                        if (validationOptions.context.maxAmount) {
                            isValid = !(relatedValue < validationOptions.context.maxAmount && value !== validationOptions.context.validValue);
                        }
                        else if (validationOptions.context.minAmount) {
                            isValid = !(relatedValue >= validationOptions.context.minAmount && value !== validationOptions.context.validValue);
                        }
                    }
                    return isValid;
                }
            }
        });
    };
}
exports.TransferTypeValidator = TransferTypeValidator;
//# sourceMappingURL=transferTypeValidator.js.map