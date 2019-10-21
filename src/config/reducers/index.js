import {combineReducers} from "redux";
import {deviceType} from "./device-type";
import {textsOfPages} from "./get-all-pages-text";
import {auth} from "./auth";

export default combineReducers({
	deviceType,
	textsOfPages,
	auth
});
