import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message, package: selectedPackage } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // If ConvertKit is configured, subscribe the contact
    if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
      try {
        await fetch(
          `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              api_key: process.env.CONVERTKIT_API_KEY,
              email,
              first_name: name.split(" ")[0],
              fields: {
                company: company || "",
                message,
                package: selectedPackage || "",
              },
            }),
          }
        );
      } catch {
        // ConvertKit subscription failed, but we still want to capture the lead
      }
    }

    // Log the submission (in production, this would go to a database or CRM)
    console.log("Contact form submission:", {
      name,
      email,
      company,
      message,
      package: selectedPackage,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will be in touch within 1 business day.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
