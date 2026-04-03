import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Send admin email notification about new booking
export async function sendBookingEmail(reservation) {
  const from = process.env.EMAIL_FROM;
  const to = process.env.EMAIL_TO;

  if (!from || !to) {
    throw new Error("EMAIL_FROM or EMAIL_TO is missing in .env");
  }

  const {
    name,
    phone,
    email,
    vehicle,
    vehicleType,
    service,
    preferredDate,
    preferredTime,
    estimatedTotal,
    notes,
  } = reservation;

  const subject = `New booking request — ${name}`;

  const html = `
    <h2>New booking request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
    <p><strong>Vehicle:</strong> ${vehicleType || "N/A"} — ${vehicle}</p>
    ${
      estimatedTotal
        ? `<p><strong>Estimated Total:</strong> $${estimatedTotal}</p>`
        : ""
    }
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Date:</strong> ${new Date(preferredDate).toDateString()}</p>
    ${preferredTime ? `<p><strong>Time:</strong> ${preferredTime}</p>` : ""}
    ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ""}
  `;

  const { data, error } = await resend.emails.send({ from, to, subject, html });

  if (error) {
    throw new Error(error.message || "Resend failed");
  }

  console.log("[email] sent:", data?.id);
}

export async function sendCustomerConfirmationEmail(reservation) {
  const from = process.env.EMAIL_FROM;

  if (!from) {
    throw new Error("EMAIL_FROM is missing in .env");
  }

  const {
    name,
    email,
    service,
    vehicle,
    vehicleType,
    preferredDate,
    preferredTime,
    estimatedTotal,
  } = reservation;

  if (!email) return; // просто не отправляем, если нет email

  const subject = "We received your booking request";

  const html = `
    <h2>Thank you, ${name}!</h2>
    <p>Your booking request has been received.</p>

    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Vehicle:</strong> ${vehicleType} — ${vehicle}</p>
    ${
      estimatedTotal
        ? `<p><strong>Estimated Total:</strong> $${estimatedTotal}</p>`
        : ""
    }
    <p><strong>Date:</strong> ${new Date(preferredDate).toDateString()}</p>
    ${preferredTime ? `<p><strong>Time:</strong> ${preferredTime}</p>` : ""}

    <p>We will contact you shortly.</p>
  `;

  const { data, error } = await resend.emails.send({
    from,
    to: email,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message || "Resend failed");
  }

  console.log("[email][customer] sent:", data?.id);
}
