import {getAllPagesTextTypes} from "../models/get-all-pages-text";

export function getAllPagesText(date) {
	return {
		type : getAllPagesTextTypes.GET_ALL_PAGES_TEXT_ACTION,
		payload : date
	};
}
