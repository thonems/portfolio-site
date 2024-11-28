"use server";
import { Resend } from "resend";


//const resend = new Resend(process.env.RESEND_API_KEY);
/*
export const sendEmail = async (formData: FormData) => {
    console.log(formData.get("email"));
    console.log(formData.get("message"));
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'thonem10@gmail.com',
        subject: 'from the website',
        text: 'testing'
    });
};


export const sendEmail = async (formData: FormData) => {
    const email = formData.get("email");
    const message = formData.get("message");

    resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['thonem10@gmail.com'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>',
    });
}
    */

export const sendEmail = async (formData: FormData) => {
    console.log(formData.get("email"));
    console.log(formData.get("message"));
    /*
    resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'thonem10@gmail.com',
        subject: 'from the website',
        text: 'testing'
    });
    */
};