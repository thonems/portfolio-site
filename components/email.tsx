"use server";
import { error } from "console";
import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log("server side: ");
    console.log(formData.get("email"));
    console.log(formData.get("message"));
    const email = formData.get("email");
    const message = formData.get("message");

    if(!email || typeof email !== "string") {
        throw new Error ("not valid email");
    };

    if(!message || typeof message !== "string") {
       throw new Error ("message not found")
    };

    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'thonem10@gmail.com',
        subject: 'from portfolio site', 
        replyTo: email,
        text: message,
    });
};