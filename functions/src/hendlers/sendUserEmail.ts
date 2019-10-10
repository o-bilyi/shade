import * as nodemailer from "nodemailer";
import {config, Request, Response} from "firebase-functions";

const {gmail : { email, password }} = config();
// const gmailPassword = config().gmail.password;

console.log(email, password, " hasel");

const mailTransport = nodemailer.createTransport({
	service : "gmail",
	auth : {
		user : email,
		pass : password,
	},
});

function send(name: string, userEmail: string, message: string) {
	const text = `Email: ${userEmail} Message: ${message}`;
	const mailOptions = {
		from : `Shade Design ${userEmail}`,
		to : "beluy845@gmail.com",
		subject : `Message from ${name}`,
		text : text
	};

	return mailTransport.sendMail(mailOptions);
}
function throwHttpError(res : Response, code : number, text ?: string) {
	res.statusCode = code;
	res.send(text || "Error");
}
export function sendUserEmail(req : Request, res: Response) {
	if (req.body.name && req.body.email && req.body.message) {
		send(req.body.name, req.body.email, req.body.message).then(() => {
			res.send("Success");
		}).catch((error : any) => {
			throwHttpError(res, 401, JSON.stringify(error));
		});
		return;
	}
	throwHttpError(res, 400);
}
