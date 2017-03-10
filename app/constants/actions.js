'use strict';

import keymirror from 'keymirror';

const Actions = keymirror({

	/*******************************
		Authentication Actions
	*******************************/
	'SEND_OTP_SUCCESS': null,
	'SEND_OTP_FAILURE': null,

	/******************************
		User Actions
	******************************/

	'USER_CREATE_SUCCESS': null,
	'USER_CREATE_FAILURE': null
});

export default Actions;