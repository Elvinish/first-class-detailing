import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send admin email notification about new booking
export async function sendBookingEmail(reservation) {
  const to = process.env.EMAIL_TO;

  if (!to) {
    throw new Error("EMAIL_TO is missing in .env");
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

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
    replyTo: email || process.env.EMAIL_USER, // 🔥 ключ
  });

  console.log("[email] sent via Gmail");
}

// временно не используем
export async function sendCustomerConfirmationEmail() {
  return;
}
