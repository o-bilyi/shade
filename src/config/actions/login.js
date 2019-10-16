import {baseHandlerAction} from "./utils";
import {storageService} from "../../core/services/StorageService";
import {changeUserInformation, loginActionTypes} from "../models/auth";

export const loginSuccess = (payload) => {
	storageService.setLocal("user", JSON.stringify(payload));
	return baseHandlerAction(loginActionTypes.LOGIN_SUCCESS_ACTION, payload);
};

export const dashboardChangeUserInformationSuccess = (payload) => {
	storageService.setLocal("user", JSON.stringify(payload));
	return baseHandlerAction(changeUserInformation.DASHBOARD_CHANGE_USER_ACTION, payload);
};

export function loginAction(cred) {
	return dispatch => {
		dispatch(baseHandlerAction(loginActionTypes.LOGIN_INIT_ACTION, {cred}));
		// const FAIL_ACTION = (res) => dispatch(baseHandlerAction(loginActionTypes.LOGIN_FAIL_ACTION, {res}));
	};
}
