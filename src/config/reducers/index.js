import {combineReducers} from "redux";
import {deviceType} from "./device-type";
import {routerReducer as routing} from "react-router-redux";

export default combineReducers({
	routing,
	deviceType,
});
