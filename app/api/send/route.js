import { NextResponse } from "next/server";
import { Resend } from "resend";
import React from "react";
import { EmailTemplate } from "../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log("Received contact form submission:", { email, subject, message });
    
    // Check if required environment variables are available
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [process.env.FROM_EMAIL || 'ayamullahkhan04@gmail.com'],
      subject: `Portfolio Contact: ${subject}`,
      react: React.createElement(EmailTemplate, { email, subject, message }),
      reply_to: email,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in POST /api/send:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}