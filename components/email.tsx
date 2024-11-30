"use server";

import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    console.log("server side: ");
    console.log(formData.get("email"));
    console.log(formData.get("message"));
    const email = formData.get("email");
    const message = formData.get("message");
    
    if(!email || typeof email !== "string") {
        return;
    };

    if(!message || typeof message !== "string") {
        return;
    };
    
    try {
        await resend.emails.send({
            from: 'Portfolio Website <onboarding@resend.dev>',
            to: 'thonem10@gmail.com',
            subject: 'from portfolio site', 
            replyTo: email as string,
            text: message as string,
        });
    } catch (error){ 
      if(error instanceof Error){
        return (error.message);
      }
      else if(error && typeof error === "object" && "message" in error){
        return error.message
      } else {
        return "something went wrong";
      }
    }
};