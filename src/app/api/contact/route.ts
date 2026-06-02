import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { renderBrandedEmail, escapeHtml, BRAND } from "@/lib/email-template";

// Force this route to run at request time (it sends email, never cached).
export const dynamic = "force-dynamic";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      "Contact form misconfigured: missing RESEND_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL"
    );
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = data.name?.trim();
  const email = data.email?.trim();
  const subject = data.subject?.trim();
  const message = data.message?.trim();
  const phone = data.phone?.trim() || "Not provided";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const detailRow = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 0; width:90px; color:${BRAND.slate}; font-size:13px; vertical-align:top;">${label}</td>
      <td style="padding:8px 0; color:${BRAND.charcoal}; font-size:14px; font-weight:600;">${value}</td>
    </tr>`;

  const html = renderBrandedEmail(`
    <h1 style="margin:0 0 8px; font-size:20px; color:${BRAND.charcoal};">New contact form enquiry</h1>
    <p style="margin:0 0 20px; color:${BRAND.slate}; font-size:14px;">Someone just reached out through the website. Reply directly to get back to them.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${BRAND.border};">
      ${detailRow("Name", escapeHtml(name))}
      ${detailRow("Email", `<a href="mailto:${escapeHtml(email)}" style="color:${BRAND.indigo}; text-decoration:none;">${escapeHtml(email)}</a>`)}
      ${detailRow("Phone", escapeHtml(phone))}
      ${detailRow("Subject", escapeHtml(subject))}
    </table>
    <div style="margin-top:20px; padding:16px 18px; background-color:${BRAND.offWhite}; border-radius:10px; border-left:3px solid ${BRAND.green};">
      <div style="color:${BRAND.slate}; font-size:12px; text-transform:uppercase; letter-spacing:1px; margin-bottom:6px;">Message</div>
      <div style="color:${BRAND.charcoal}; font-size:14px; line-height:1.6; white-space:pre-wrap;">${escapeHtml(message)}</div>
    </div>
  `);

  const text = `New contact form submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}`;

  // Auto-reply sent to the visitor who submitted the form.
  const replyHtml = renderBrandedEmail(`
    <h1 style="margin:0 0 12px; font-size:22px; color:${BRAND.charcoal};">Thank you for reaching out, ${escapeHtml(name)}!</h1>
    <p style="margin:0 0 12px; color:${BRAND.charcoal}; font-size:15px; line-height:1.7;">We&apos;ve received your message and a member of our team will get back to you shortly.</p>
    <p style="margin:0 0 16px; color:${BRAND.slate}; font-size:14px;">Here&apos;s a copy of what you sent us:</p>
    <div style="padding:16px 18px; background-color:${BRAND.offWhite}; border-radius:10px; border-left:3px solid ${BRAND.green};">
      <div style="color:${BRAND.charcoal}; font-size:14px; margin-bottom:8px;"><strong>Subject:</strong> ${escapeHtml(subject)}</div>
      <div style="color:${BRAND.charcoal}; font-size:14px; line-height:1.6; white-space:pre-wrap;">${escapeHtml(message)}</div>
    </div>
    <p style="margin:24px 0 0; color:${BRAND.charcoal}; font-size:15px;">Warm regards,<br/><strong>The Urban Pest Solution Team</strong></p>
  `);

  const replyText = `Thank you for reaching out, ${name}!

We've received your message and our team will contact you shortly.

Here's a copy of what you sent us:

Subject: ${subject}

${message}

Warm regards,
Urban Pest Solution`;

  try {
    // 1. Notify the team.
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail.split(",").map((addr) => addr.trim()),
      replyTo: email,
      subject: `New enquiry: ${subject}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error (team notification):", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 }
      );
    }

    // 2. Auto-reply to the visitor. Don't fail the request if only this errors,
    //    since the team has already been notified successfully.
    const { error: replyError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: toEmail.split(",")[0].trim(),
      subject: "Thank you for contacting Urban Pest Solution",
      html: replyHtml,
      text: replyText,
    });

    if (replyError) {
      console.error("Resend error (visitor auto-reply):", replyError);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}