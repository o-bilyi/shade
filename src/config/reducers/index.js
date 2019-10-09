import {combineReducers} from "redux";
import {deviceType} from "./device-type";
import {textsOfPages} from "./get-all-pages-text";

export default combineReducers({
	deviceType,
	textsOfPages,
});
