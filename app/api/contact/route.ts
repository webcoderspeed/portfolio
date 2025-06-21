import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, subject } = await req.json();

    const ownerEmail = process.env.OWNER_EMAIL!;
    const contactEmail = process.env.CONTACT_EMAIL!;

    const styledOwnerHTML = `
      <div style="font-family: sans-serif; background: #f9fafb; padding: 24px; border-radius: 8px;">
        <h2 style="font-size: 20px; margin-bottom: 12px;">📬 New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 16px; padding: 16px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px;">
          <p style="margin: 0;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
      </div>
    `;

    const styledUserHTML = `
      <div style="font-family: sans-serif; background: #f9fafb; padding: 24px; border-radius: 8px;">
        <h2 style="font-size: 20px; margin-bottom: 12px;">✅ Message Received</h2>
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thanks for reaching out! We’ve received your message and will get back to you shortly.</p>
        <p>Here’s a copy of your message:</p>
        <div style="margin-top: 16px; padding: 16px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px;">
          <p style="margin: 0;">${message.replace(/\n/g, '<br/>')}</p>
        </div>
        <p style="margin-top: 20px;">Cheers,<br/><strong>webcoderspeed.dev Team</strong></p>
      </div>
    `;

     resend.batch.send([
      {
        from: `webcoderspeed.dev <${contactEmail}>`,
        to: [ownerEmail],
        subject: subject || `New message from ${name}`,
        html: styledOwnerHTML,
      },
      {
        from: `webcoderspeed.dev <${contactEmail}>`,
        to: [email],
        subject: 'We received your message!',
        html: styledUserHTML,
      },
    ]);

    return NextResponse.json({ success: true, message: 'Emails sent via Resend!' });
  } catch (err) {
    console.error('Resend send error:', err);
    return NextResponse.json({ success: false, message: 'Email sending failed' }, { status: 500 });
  }
}
