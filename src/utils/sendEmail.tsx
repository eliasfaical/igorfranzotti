import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';
const SENDGRID_API_KEY = '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';

const sendEmail = async ({ name, email }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email
            }
          ],
          subject: 'Demo success :)'
        }
      ],
      from: {
        email: 'elaisfaical@gmail.com',
        name: 'Test SendGrid'
      },
      content: [
        {
          type: 'text/html',
          value: `Congratulations <b>${name}</b>, you just sent an email with sendGrid`
        }
      ]
    })
  });
}

export { sendEmail };