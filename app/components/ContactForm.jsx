"use client";

import { useState } from "react";


export default function ContactForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("api/message", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                type: "contact",
                data: {
                    fullname,
                    email,
                    message,
                },
            }),
        });

        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);
        

        if (success) {
            setFullname("");
            setEmail("");
            setMessage("");
            
        }
        

    };

    return (
    <>
        <form onSubmit={handleSubmit}
            className="py-4 mt-4 border-t flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="fullname " className="text-white">Full Name</label>
                <input onChange={(e) => setFullname(e.target.value)}
                    value={fullname}
                    type="text" id="fullname" placeholder="John Doe"
                    className="shadow-md px-6 border border-slate-300"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white">Email</label>
                <input onChange={(e) => setEmail(e.target.value)}
                    value={email} 
                    type="text" id="email" placeholder="john@gmail.com"
                    className="shadow-md px-6 border border-slate-300"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-white">Your Message</label>
                <textarea onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    id="message" placeholder="Type your message here..."
                    className="shadow-md px-6 border border-slate-300 h-32"
                ></textarea>
            </div>

            <button type="submit"
                className="bg-lime-400 p-3 text-zinc font-bold"
            >Send</button>
        </form>

        <div className="bg-slate-100 flex flex-col">
            {
                error && error.map((e, index) => (
                    <div key={index} className={`${success ? 'text-green-800' : 'text-red-600'} px-5 py-2`}>{e}</div>
                ))
            }
            
        </div>
    </>
    );
}