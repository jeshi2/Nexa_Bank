
import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Contact from "../../components/models/contact";


import mongoose from "mongoose";

export async function POST(req) {
    const { type, data} = await req.json();

    let messages = [];


    try {
        await connectDB();

        if (type === "contact") {
            // Handle contact form submission
            const { fullname, email, message } = data;
            await Contact.create({ fullname, email, message });

            return NextResponse.json({
                msg: ["Message Successfully Submitted"],
                success: true,
            });

            // Add code to retrieve data from MongoDB
        } else if (type === "retrieveData") {
            // Retrieve messages from MongoDB to admin panel
            messages = await Contact.find();
        }

        // Return messages
        return NextResponse.json({
            messages,
        });

    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);

            return NextResponse.json({ msg: errorList });
        } else {
            return NextResponse.json(error);
        }
    }

}
