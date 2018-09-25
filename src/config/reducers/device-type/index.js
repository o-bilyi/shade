import {generateReducer} from "../utils";
import {deviceTypeTypes} from "config/models/device-type/index";

const initialState = null;

export const deviceType = generateReducer(initialState, {
	[deviceTypeTypes.CHANGE_DEVICE_TYPE_ACTION] : (state, action) => {
		return action.payload;
	},
});
