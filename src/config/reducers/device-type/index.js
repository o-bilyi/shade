import {generateReducer} from "../utils";
import {deviceTypeTypes} from "config/models/device-type";

const initialState = {};

export const deviceType = generateReducer(initialState, {
	[deviceTypeTypes.CHANGE_DEVICE_TYPE_ACTION] : (state, action) => {
		console.warn(action, " reducer");
		return {
			...state,
			deviceType : action.payload
		};
	},
});
