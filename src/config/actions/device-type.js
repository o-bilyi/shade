import {deviceTypeTypes} from "../models/device-type";

export function changeDeviceType(deviceType) {
	return {
		type : deviceTypeTypes.CHANGE_DEVICE_TYPE_ACTION,
		payload : deviceType
	};
}
