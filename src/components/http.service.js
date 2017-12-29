/**
 * Created by Sviatoslav Barbutsa on 02/06/2016.
 */

import { Promise } from "es6-promise";

// import {
// 	serverErrorShowAction
// } from "core/actions";


const selectedResConvertOpt = Symbol("selectedResConvertOpt");
let COMMON_HEADERS = {};

/**
 *  A Service to communication between server and client by fetch instead of AJAX.
 *  Every http requests should be done via this service. It should be a single entry point for any http request.
 *
 *  It supports a high abstract - get/post/status handlers/response convert (by default  it returns a raw value)
 */
class HttpService {
	/* redux dispatch to trigger action  */
	dispatch;

	/* the base config for every request  */
	config = {
		credentials : "include"
	};

	/* All possible options for the response convert from the raw source. This format like enum  but isn't.  */
	responseConvertOptions = {
		"json" : "json",
		"blob" : "blob",
		"text" : "text",
		"formData" : "formData",
		"arrayBuffer" : "arrayBuffer"
	};


	/* Action list. There should be a list of all actions that will be fired on the relative response status */
	status200ActionList = [];
	status400ActionList = [];
	status401ActionList = [];
	status405ActionList = [];
	status500ActionList = [];


	/**
	 * check if our list exists and if it type is a really list
	 * @param { any } listToTest -> argument to test
	 * @returns {Boolean}
	 */
	static isExistsAndIsList(listToTest) {
		return Boolean(listToTest && ~Object.prototype.toString.call(listToTest).search(/Array/));
	}


	get resConverter() {
		return this[selectedResConvertOpt];
	}

	set resConverter(resConverterOpt) {
		this[selectedResConvertOpt] = resConverterOpt;
	}

	get commonHeaders() {
		return COMMON_HEADERS;
	}

	set commonHeaders(val) {
		COMMON_HEADERS = {
			...COMMON_HEADERS,
			...val
		};
	}

	setAcceptLanguageHeader(lang) {
		this.commonHeaders = {
			"Accept-Language" : lang
		};
		return this;
	}


	/**
	 * add status handlers to the actions list. These actions will be executed on a relative response status
	 * @param { number } statusCode -> status code of actions list to which we want to add actions
	 * @param { array|[] } actionList -> an actions array
	 * @returns { HttpService } -> the instance of our service
	 */
	addStatusActions(statusCode, actionList = []) {
		if (HttpService.isExistsAndIsList(actionList)) {
			this._addActions(statusCode, actionList);
		} else {
			throw new TypeError(`actionList should exists and be an array. Received - ${actionList}`);
		}

		return this;
	}


	/**
	 * add the redux dispatch to the service in case of execution redux actions
	 * @param { function } dispatch -> the redux dispatch
	 * @returns { HttpService } -> the instance of our service
	 */
	addDispatch(dispatch) {
		this.dispatch = dispatch;
		return this;
	}


	/**
	 * it adds the response convert method (JSON).
	 * After the request end this transformation will be applied to the response
	 * @returns {HttpService}
	 */
	addConvertResToJSON() {
		this.resConverter = this.responseConvertOptions.json;
		return this;
	}

	/**
	 * it adds the response convert method (Blob).
	 * After the request end this transformation will be applied to the response
	 * @returns {HttpService}
	 */
	addConvertResToBlob() {
		this.resConverter = this.responseConvertOptions.blob;
		return this;
	}

	/**
	 * it adds the response convert method (Text).
	 * After the request end this transformation will be applied to the response
	 * @returns {HttpService}
	 */
	addConvertResToText() {
		this.resConverter = this.responseConvertOptions.text;
		return this;
	}

	/**
	 * it adds the response convert method (FormData).
	 * After the request end this transformation will be applied to the response
	 * @returns {HttpService}
	 */
	addConvertResToFormData() {
		this.resConverter = this.responseConvertOptions.formData;
		return this;
	}

	/**
	 * it adds the response convert method (ArrayBuffer).
	 * After the request end this transformation will be applied to the response
	 * @returns {HttpService}
	 */
	addConvertResToArrayBuffer() {
		this.resConverter = this.responseConvertOptions.arrayBuffer;
		return this;
	}


	generateFinalConf(initialConf) {
		return {
			...initialConf,
			headers : {
				...COMMON_HEADERS,
				...initialConf.headers
			}
		};
	}


	/**
	 * it creates a GET request
	 * @param { string } url -> url to request
	 * @param { Object } config -> a fetch config object
	 * @returns {Promise} -> The fetch promise.
	 * 							(res <{
											 convertedResponse : T
											 rawResponse : T
										 }>) => {}
	 */
	generateGetRequest(url, config = {
		method : "GET",
		headers : {}
	}) {
		return this.fetch(url, this.generateFinalConf(config));
	}

	/**
	 * it creates a POST request
	 * @param { string } url -> url to request
	 * @param { Object } config -> a fetch config object
	 * @returns {Promise} -> The fetch promise.
	   							(res <{
											 convertedResponse : T
											 rawResponse : T
										 }>) => {}
	 */
	generatePostRequest(url, config = {
		body : null
	}) {
		const defaultConf = {
			method : "POST",
			headers : {
				"Content-Type" : "application/json"
			}
		};

		return this.fetch(url, Object.assign({}, defaultConf, config));
	}

	/**
	 * It creates a PUT request
	 * @param { string } url -> url to request
	 * @param { Object } config -> a fetch config object
	 * @returns {Promise} -> The fetch promise.
	 (res <{
											 convertedResponse : T
											 rawResponse : T
										 }>) => {}
	 */
	generatePutRequest(url, config = {body : null}) {
		const defaultConf = {
			method : "PUT",
			headers : {
				"Content-Type" : "application/json"
			}
		};

		return this.fetch(url, this.generateFinalConf(Object.assign({}, defaultConf, config)));
	}


	/**
	 * a direct method to create any request that you want
	 * @param { string } url -> url to request
	 * @param { Object } config -> a fetch config object
	 * @returns {Promise} -> The fetch promise.
                    (res <{
											 convertedResponse : T
											 rawResponse : T
										 }>) => {}
	 */
	fetch(url, config) {
		if (url && typeof url === "string") {
			return this._requestCore(url, config);
		}
		throw new TypeError(`url should exists and be a string. Received - ${url}`);
	}


	/**
	 * private: the fetch core that used to create a request
	 * if any response converter (for ex: json) isn't chosen converterResponse will be the same like rawResponse
	 * @param { string } url ->url to request
	 * @param { Object } config -> a fetch config object
	 * @returns {*|Promise|Promise<U>|Promise.<T>}
	 * @private
	 */
	_requestCore(url, config) {
		return fetch(url, Object.assign({}, config, this.config))
			.then(res => {
				return this._convertResponse(res).then(
					convertedResponse => {
						this._triggerStatusActions(res.status, convertedResponse);
						return {
							convertedResponse : convertedResponse,
							rawResponse : res
						};
					}
				);
			})
			.catch((e) => {
				console.error("request core HttpService +++++++++++++++++++");
				console.error("ERRROR ===> ", e);
				console.error("!request core HttpService +++++++++++++++++++");


				// this._triggerDispatch(serverErrorShowAction, e);
				this._triggerStatusActions(500, e);
				// throw e;
			});
	}

	/**
	 * dispatches an action in case of existing dispatch
	 * @param { Function } action -> an action to dispatch
	 * @param { any } param -> some param to pass it into the action
	 * @private
	 */
	_triggerDispatch(action, param = null) {
		if (this.dispatch) {
			this.dispatch(action(param));
		}
	}

	/**
	 * private: transforms a response to that format that we added.
	 * @param { any } res -> response to handle
	 * @returns {Promise | any} -> a fetch transformation promise or a raw response
	 * @private
	 */
	_convertResponse(res) {
		let result;

		switch(this.resConverter) {
		case this.responseConvertOptions.json:
			result = res.json();
			break;
		case this.responseConvertOptions.blob:
			result = res.blob();
			break;
		case this.responseConvertOptions.text:
			result = res.text();
			break;
		case this.responseConvertOptions.formData:
			result = res.formData();
			break;
		case this.responseConvertOptions.arrayBuffer:
			result = res.arrayBuffer();
			break;
		default:
			result = Promise.resolve(res);
			break;
		}

		return result;
	}

	/**
	 * private: add actions to a relative status action list
	 * @param { number } listType -> a response status list number.
	                    For ex. 200 -> actions will be added to the 200HandlersList
	 * @param { array } actionList -> an actions array
	 * @private
	 */
	_addActions(listType, actionList) {
		this[`status${listType}ActionList`] = actionList;
	}


	/**
	 * private: it executes actions for the relative response status. And now it works only with the redux dispatch
	 * @param { number } statusCode -> a response status number.
	 * @param { any } response -> a fetch response
	 * @private
	 */
	_triggerStatusActions(statusCode, response) {
		const actionListName = `status${statusCode}ActionList`;

		if (this.hasOwnProperty(actionListName)) {
			this[actionListName].forEach(action => {
				this._coreActionTrigger(action, response);
			});
		}
	}

	/**
	 * Execute an action depends on an existing dispatch
	 * @param { Function } action -> action to execute
	 * @param { any } res - response to pass in an action
	 * @private
	 */
	_coreActionTrigger(action, res) {
		const dispatch = this.dispatch;
		if (dispatch) {
			dispatch(action(res));
		} else {
			action(res);
		}
	}
}

const makeHttpService = () => new HttpService();

export default makeHttpService;
