const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = process.env.SENDGRID_API_KEY;
sgMail.setApiKey(sendgridAPIKey);
const taskAppEmail = 'support@royhadadtaskapp.com';

const sendWelocomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: taskAppEmail,
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: taskAppEmail,
        subject: 'goodbye!',
        text: `Hi ${name}! We are sorry to see you leave, will you share with us the reason for deleting your account?`
    })
}

module.exports = {
    sendWelocomeEmail,
    sendCancelationEmail
}