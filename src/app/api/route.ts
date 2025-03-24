import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    // Ensure content type is JSON
    if (request.headers.get("content-type") !== "application/json") {
      return NextResponse.json({ message: "Invalid content type" }, { status: 400 })
    }

    // Parse JSON body
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Name, email, and message are required" }, { status: 400 })
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: process.env.EMAIL_SERVER_SECURE === "true",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: `"${name}" <${email}>`, // Use sender's email dynamically
      to: process.env.EMAIL_TO || "your-email@example.com", // Your email where you receive messages
      replyTo: email,
      subject: `Portfolio Contact: ${subject || "New message from your portfolio"}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p style="background-color: #f5f5f5;"><strong>Name:</strong> ${name}</p>
          <p style="background-color: #f5f5f5;"><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <p style="margin-top: 0;"><strong>Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Email sent successfully" })
  } catch (error: any) {
    console.error("Error sending email:", error)

    return NextResponse.json({ 
      message: "Failed to send email", 
      error: error.message || "Unknown error" 
    }, { status: 500 })
  }
}
