'use strict';

import validator from 'validator';

export function isValidNumber(number, locale){
	let __isValid;

	__isValid = validator.isNumeric(number);
	__isValid = validator.isMobilePhone(number, locale);

	return __isValid;
};

export function isValidEmail(email){
	let __isValid;

	__isValid = validator.isEmail(email);

	return __isValid;
}

export function isInputEmpty(input){
	return validator.isEmpty(input.toString());
}