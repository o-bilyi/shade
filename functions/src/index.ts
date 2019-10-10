import * as cors from "cors";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

import {sendUserEmail} from "./hendlers/sendUserEmail";

admin.initializeApp(functions.config().firebase);

const whiteLists = ["https://shade-design.com.ua"];
whiteLists.push("http://localhost:3000");

const corsHandler = cors({
	origin : (origin : any, cb) => {
		return whiteLists.includes(origin) ? cb(null, true) : cb(new Error("Not allowed by CORS"));
	}
});

function corsMiddleware(next: any): any {
	// @ts-ignore
	return (req: any, res: any) => corsHandler(req, res, () => next(req, res));
}

export const sendUserMail = functions.https.onRequest(corsMiddleware(sendUserEmail));
