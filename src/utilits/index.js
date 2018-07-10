/**
 * scrollTo element, on default scroll to x = 0, y = 0
 * @param x{number}
 * @param y{number}
 */
export const scrollTo = (x = 0, y = 0) => {
  window.scrollTo(x, y);
};

/**
 * @param url
 * @param method
 * @param mode
 * @returns {Promise<Response>}
 * @constructor
 */
export function Fetch(url, method = "GET", mode = "cors") {
	return fetch(url,{method, mode})
	.then(res => {
		if(res.ok) return res.json();
	})
	.then(data => data)
	.catch(function (error) {
		console.error("Request failure: ", error);
	});
}

export const getDeviceType = () => {
	const bodyWidth = document.body.clientWidth;
  let type;
  if (bodyWidth > 1024) {
    type = "desktop";
  }
  if (bodyWidth <= 1024 && !bodyWidth < 680) {
    type = "tablet";
  }
  if (bodyWidth <= 680) {
    type = "mobile";
  }
  return type;
};

export const deviceType = {
	desktop : "desktop",
	tablet : "tablet",
	mobile : "mobile",
};
