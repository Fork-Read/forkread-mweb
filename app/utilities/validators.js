'use strict';

import validator from 'validator';

export function isValidNumber(number, locale){
	let __isValid;

	__isValid = validator.isNumeric(number);
	__isValid = validator.isMobilePhone(number, locale);

	return __isValid;
};