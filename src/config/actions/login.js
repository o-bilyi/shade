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
	return dispatch => new Promise((resolve, reject) => {
		if (cred.pass === password) {
			resolve()
			return loginActionSuccess(true);
		} else {
			reject()
			return loginActionFail(false)
		}
		// request().then((response) => {
		// 	dispatch({type: SOME_ACTION, value: response.value});
		// 	resolve(response);
		// });
	});
}

// dispatch(myAsyncAction()).then(() => this.setState({updateLocalComponentState: true}));

/*export function loginAction(cred) {
	return new Promise((resolve, reject) => {
		if (cred.pass === password) {
			resolve()
			return loginActionSuccess(true);
		} else {
			reject()
			return loginActionFail(false)
		}
	})

}*/
