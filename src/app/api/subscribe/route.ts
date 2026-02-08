import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
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

    // Subscribe via ConvertKit if configured
    if (process.env.CONVERTKIT_API_KEY && process.env.CONVERTKIT_FORM_ID) {
      const res = await fetch(
        `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            api_key: process.env.CONVERTKIT_API_KEY,
            email,
          }),
        }
      );

      if (!res.ok) {
        return NextResponse.json(
          { error: "Subscription failed. Please try again." },
          { status: 500 }
        );
      }
    }

    // Log subscription (in production, this would go to database or CRM)
    console.log("Email subscription:", { email, timestamp: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      message: "Successfully subscribed.",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
