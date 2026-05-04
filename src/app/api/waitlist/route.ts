import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

function getResendClient() {
  if (!resendApiKey) {
    return null;
  }

  return new Resend(resendApiKey);
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const resend = getResendClient();
    if (!resend) {
      return NextResponse.json(
        { error: "Waitlist email service is not configured." },
        { status: 503 }
      );
    }

    await resend.emails.send({
      from: "Bullrider.Pro <support@bullrider.pro>",
      to: email,
      subject: "Welcome to the Bullrider.Pro Waitlist! 🤠",
      html: `
        <div style="background-color:#0f1b2d;color:#e8e8ec;padding:40px;font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="text-align:center;margin-bottom:30px;">
            <h1 style="color:#c9a84c;font-size:28px;margin:0;">BULLRIDER.PRO</h1>
            <p style="color:#8a9bb5;font-size:14px;margin-top:5px;">Pain is Temporary, Victory Lasts Forever</p>
          </div>
          <h2 style="color:#c9a84c;font-size:22px;">You're on the list! 🎉</h2>
          <p style="color:#c0c8d8;font-size:16px;line-height:1.6;">
            Thanks for signing up for early access to <strong style="color:#c9a84c;">Bullrider.Pro</strong> — the ultimate mobile platform for bull riders, stock contractors, trainers, sponsors, and fans.
          </p>
          <p style="color:#c0c8d8;font-size:16px;line-height:1.6;">
            We're building something special for the bull riding community, and you'll be among the first to experience it.
          </p>
          <h3 style="color:#c9a84c;font-size:18px;margin-top:25px;">What's coming:</h3>
          <ul style="color:#c0c8d8;font-size:15px;line-height:1.8;">
            <li>🤠 Rider profiles & community feed</li>
            <li>📡 Live streaming from any arena</li>
            <li>🏆 Real-time leaderboards & event scoring</li>
            <li>🐂 Complete bull database with stats</li>
            <li>🎯 AI ride analysis & AR bull simulator</li>
            <li>🩹 Injury tracking & wearable integration</li>
            <li>🛒 Gear & bull marketplace</li>
            <li>🤝 Sponsor matching</li>
            <li>⭐ Youth challenges & achievements</li>
          </ul>
          <p style="color:#c0c8d8;font-size:16px;line-height:1.6;">
            We'll keep you posted on launch updates. Stay tough. 💪
          </p>
          <p style="color:#8a9bb5;font-size:14px;margin-top:30px;">
            — The Bullrider.Pro Team<br/>
            <a href="https://bullrider.pro" style="color:#c9a84c;">bullrider.pro</a>
          </p>
          <hr style="border:none;border-top:1px solid #2a4a7a;margin:30px 0;" />
          <p style="color:#5a6a80;font-size:12px;text-align:center;">
            &copy; 2026 Bullrider.Pro. All rights reserved.
          </p>
        </div>
      `,
    });

    // Also notify yourself
    await resend.emails.send({
      from: "Bullrider.Pro <support@bullrider.pro>",
      to: "support@bullrider.pro",
      subject: "New Waitlist Signup!",
      html: `<p>New waitlist signup: <strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
