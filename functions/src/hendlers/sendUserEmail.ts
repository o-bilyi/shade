import {Request, Response} from "firebase-functions";
const sendGmail = require("gmail-send");

const emailClient = sendGmail({
	user : "shade.design.web@gmail.com",
	pass : "sasha452",
});

export function sendUserEmail(req : Request, res: Response) {
	const {name, message} = req.body;
	const email2 = req.body.email;
	try {
		emailClient({
			to : "o.d.bilyi@gmail.com",
			subject : "Her",
			html : `<h2>Request from ${email2} and user name is: ${name}</h2><h3>Message</h3><p>${message}</p>`
		}, function(error ?: Error) {
		    if(error) {
		    	console.log(`email send from ${email2}`, JSON.stringify(arguments));
				res.status(405);
				res.send("error");
			} else {
				res.status(200);
				res.send("ok");
			}
		});
	} catch (e) {
		console.warn(e, "error");
		res.status(405);
		res.send("error");
	}
}
