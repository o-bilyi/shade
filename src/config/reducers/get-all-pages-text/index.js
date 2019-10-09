import {generateReducer} from "../utils";
import {getAllPagesTextTypes} from "config/models/get-all-pages-text/index";

const initialState = null;

export const textsOfPages = generateReducer(initialState, {
	[getAllPagesTextTypes.GET_ALL_PAGES_TEXT_ACTION] : (state, action) => {
		return action.payload;
	},
});
