"use client";

import React from "react";
import { sendEmail } from "@/email/email";
import toast from "react-hot-toast";
import SubmitButton from "./submit-button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-32 mb-16 sm:mb-28 w-[min(100%,38rem) text-center]"
    >
      <h2 className="text-center text-3xl font-bold mb-8">Contact me</h2>
      <p className="text-2x1 font-medium text-gray-500">
        Feel free to conatact me below or email: thonem10@gmail.com
      </p>

      <form
        className="flex flex-col mt-9"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          } else {
            toast.success("Email sent!");
          }
        }}
      >
        <input
          type="email"
          placeholder="Your email"
          required={true}
          maxLength={500}
          className=" px-3 h-12 rounded-md border border-black/20 p-3ppm"
          name="email"
        />

        <textarea
          className="h-48 my-4 border border-black/20 rounded-md px-3 p-3"
          name="message"
          required={true}
          maxLength={4000}
          placeholder="Message"
        />

        <SubmitButton />
      </form>
    </section>
  );
}
