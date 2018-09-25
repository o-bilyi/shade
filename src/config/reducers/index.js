import {combineReducers} from "redux";
import {deviceType} from "./device-type";
import {pagesText} from "./get-all-pages-text";

export default combineReducers({
	deviceType,
	pagesText,
});
