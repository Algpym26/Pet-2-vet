const nodemailer = require("nodemailer");

async function sendEmail(name, email) {
  // “use strict”;
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"The Vets" <Pet2Vet@example.com>', // sender address
    to: `${email}`, // list of receivers
    subject: `Hi, ${name}! Welcome to Pet2Vet`, // Subject line
    text: `Hi, ${name} Welcome to Pet2Vet!`, // plain text body
    html: `<h1> Congratulations,  ${name}! </h1>.
    <h2>You are now signed up for Pet2Vet.</h2>
    <h3>Use our application to share your pets with our vets.</h3>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview this email by putting this preview URL in a button on the page for demo
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  return "Preview URL: %s", nodemailer.getTestMessageUrl(info);
}

module.exports = sendEmail;
