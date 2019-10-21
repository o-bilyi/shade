import {store} from "../../index";
import {loginActionTypes} from "../models/auth";
const password = "9357923285ede651cbdce2a7fc42538d"

function loginActionSuccess(date) {
	return {
		type : loginActionTypes.LOGIN_SUCCESS_ACTION,
		payload : date
	};
}

function loginActionFail(date) {
	return {
		type : loginActionTypes.LOGIN_FAIL_ACTION,
		payload : date
	};
}

export function loginAction(cred) {
	return new Promise((resolve) => {
		if (cred.pass === password) {
			store.dispatch(loginActionSuccess(true));
			resolve();
		} else {
			store.dispatch(loginActionFail(false));
			throw new Error("Login error")
		}
	})
}
