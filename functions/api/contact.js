const jsonResponse = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  })

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')

export async function onRequestPost(context) {
  try {
    const {
      name = '',
      email = '',
      phone = '',
      service = '',
      message = '',
      website = '',
    } = await context.request.json()

    // Rejtett spamcsapda
    if (website) {
      return jsonResponse({
        success: true,
        message: 'Your request was sent successfully.',
      })
    }

    const formData = {
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      service: String(service).trim(),
      message: String(message).trim(),
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      return jsonResponse(
        {
          success: false,
          message: 'Please complete every required field.',
        },
        400
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(formData.email)) {
      return jsonResponse(
        {
          success: false,
          message: 'Please enter a valid email address.',
        },
        400
      )
    }

    if (
      !context.env.BREVO_API_KEY ||
      !context.env.BREVO_SENDER_EMAIL ||
      !context.env.CONTACT_RECIPIENT_EMAIL
    ) {
      console.error('Missing Brevo environment variables')

      return jsonResponse(
        {
          success: false,
          message: 'The email service is not configured correctly.',
        },
        500
      )
    }

    const safeName = escapeHtml(formData.name)
    const safeEmail = escapeHtml(formData.email)
    const safePhone = escapeHtml(formData.phone)
    const safeService = escapeHtml(formData.service)
    const safeMessage = escapeHtml(formData.message).replaceAll(
      '\n',
      '<br />'
    )

    const brevoResponse = await fetch(
      'https://api.brevo.com/v3/smtp/email',
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': context.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: {
            name: 'Prairie Pros Website',
            email: context.env.BREVO_SENDER_EMAIL,
          },

          to: [
            {
              name: 'Prairie Pros',
              email: context.env.CONTACT_RECIPIENT_EMAIL,
            },
          ],

          replyTo: {
            name: formData.name,
            email: formData.email,
          },

          subject: `New Prairie Pros request - ${formData.service}`,

          htmlContent: `
            <!doctype html>
            <html lang="en">
              <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;color:#16274f;">
                <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
                  <div style="background:#16274f;color:#ffffff;padding:24px;border-radius:14px 14px 0 0;">
                    <h1 style="margin:0;font-size:24px;">
                      New quote request
                    </h1>

                    <p style="margin:8px 0 0;color:#f0b429;">
                      Prairie Pros website
                    </p>
                  </div>

                  <div style="background:#ffffff;padding:28px;border-radius:0 0 14px 14px;">
                    <p>
                      <strong>Name:</strong><br />
                      ${safeName}
                    </p>

                    <p>
                      <strong>Email:</strong><br />
                      ${safeEmail}
                    </p>

                    <p>
                      <strong>Phone:</strong><br />
                      ${safePhone}
                    </p>

                    <p>
                      <strong>Requested service:</strong><br />
                      ${safeService}
                    </p>

                    <p>
                      <strong>Message:</strong><br />
                      ${safeMessage}
                    </p>
                  </div>
                </div>
              </body>
            </html>
          `,

          textContent: `
New quote request from the Prairie Pros website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
          `.trim(),
        }),
      }
    )

    const brevoData = await brevoResponse.json().catch(() => ({}))

    if (!brevoResponse.ok) {
      console.error('Brevo API error:', brevoData)

      return jsonResponse(
        {
          success: false,
          message: 'The email could not be sent. Please try again.',
        },
        502
      )
    }

    return jsonResponse({
      success: true,
      message:
        'Your request was sent successfully. We will contact you soon.',
    })
  } catch (error) {
    console.error('Contact form error:', error)

    return jsonResponse(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
      },
      500
    )
  }
}

export function onRequestGet() {
  return jsonResponse(
    {
      success: false,
      message: 'Method not allowed.',
    },
    405
  )
}