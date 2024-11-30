"use client";

import React from 'react';
import {sendEmail} from "@/components/email";

export default function Contact(){




    return (
        <section id="contact" className='scroll-mt-32 mb-16 sm:mb-28 w-[min(100%,38rem) text-center]'>
            <h2 className='text-center text-3xl font-bold mb-8'>Contact me</h2>
            <p className='text-2x1 font-medium text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, cumque?</p>

            <form className='flex flex-col mt-9' action={async (formData) => {
                await sendEmail(formData)
            }} >
                    <input type="email" placeholder="Your email" required={true} maxLength={500} className=' px-3 h-12 rounded-md border border-black/20 p-3ppm' name='email'/>

                    <textarea className='h-48 my-4 border border-black/20 rounded-md px-3 p-3' name='message' required={true} maxLength={1000} placeholder="Message" />

                    <button type="submit" className='h-12 w-32 bg-gray-800 rounded-full text-white transition-all outline-none  hover:translate-x-1 hover:scale-110'>Submit</button>
                </form>
        </section>
    )
}