// const nodemailer = require("nodemailer");
// sign up variables used for account creation and welcome email initiation
// const name = document.querySelector("#name-signup").value.trim();
// const email = document.querySelector("#email-signup").value.trim();
// const password = document.querySelector("#password-signup").value.trim();

const signUpFormHandler = async (event) => {
  console.log("function firing");
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("fetch request firing in signup.js");

    if (response.ok) {
      console.log("response ok")
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

// async function sendEmail() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: testAccount.user, // generated ethereal user
//       pass: testAccount.pass, // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"The Vets" <Pet2Vet@example.com>', // sender address
//     to: `${email}`, // list of receivers
//     subject: `Hi, ${name} Welcome to Pet2Vet!`, // Subject line
//     text: `Hi, ${name} Welcome to Pet2Vet!`, // plain text body
//     html: `<b>Hi, ${name} Welcome to Pet2Vet!</b>`, // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview this email by putting this preview URL in a button on the page for demo
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }
document
  .querySelector("#signup-button")
  .addEventListener("click", signUpFormHandler);

// sendEmail().catch(console.error);

// NOTE TO SELF: Ensure <script src="./js/signup.js"></script> at end of signup.handlebars file
