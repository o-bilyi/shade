import { push, replace, go, goForward, goBack } from "react-router-redux";

let routerServiceInstance;

class RouterService {
	store;

	setStore(store) {
		this.store = store;
	}

	getStore() {
		return this.store;
	}

	/**
	 * Redirect to a next location
	 * @param path
	 */
	navigateTo(path) {
		if (typeof path === "string" || typeof path === "object") {
			if (this.store) {
				this.store.dispatch(push(path));
			} else {
				throw new Error("Store doesn't exists. Please pass it at the entry point of a service creation");
			}
		} else {
			throw new TypeError("Path should be a string");
		}
	}


	/**
	 * Replaces the current location in history.
	 * @param path
	 */
	replace(path) {
		this.store.dispatch(replace(path));
	}

	/**
	 * Moves backwards or forwards a relative number of locations in history.
	 * @param locationNumber
	 */
	go(locationNumber) {
		this.store.dispatch(go(locationNumber));
	}

	/**
	 * Moves forward one location. Equivalent to go(1)
	 */
	goForward() {
		this.store.dispatch(goForward());
	}

	/**
	 * Moves backwards one location. Equivalent to go(-1)
	 */
	goBack() {
		this.store.dispatch(goBack());
	}
}


export default (() => {
	if (!routerServiceInstance) {
		routerServiceInstance = new RouterService();
	}
	return routerServiceInstance;
})();
