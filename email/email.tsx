"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("server side: ");
  console.log(formData.get("email"));
  console.log(formData.get("message"));
  const email = formData.get("email");
  const message = formData.get("message");

  if (!email || typeof email !== "string") {
    return { error: "invalid email or missing. " };
  }

  if (!message || typeof message !== "string") {
    return { error: "invalid message or missing. " };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Website <onboarding@resend.dev>",
      to: "thonem10@gmail.com",
      subject: "from portfolio site",
      replyTo: email as string,
      text: message as string,
    });

    if (data.error) {
      console.error("API: ERROR WITH SERVER ", data.error);
      return { error: data.error.message };
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log("error 1 ");
      return { error: error.message };
    } else if (typeof error === "object" && error && "message" in error) {
      console.log("error 2 ");
      return { error: (error as any).message };
    } else {
      console.log("error 3");
      return { error: "Something went wrong." };
    }
  }
  return {
    data,
  };
};
