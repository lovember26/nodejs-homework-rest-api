const nodemailer = require("nodemailer");
require("dotenv").config;

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   from: UKR_NET_EMAIL,
//   to: "tetianaprokopchukk@gmail.com",
//   subject: "Verify email",
//   html: "<p>Verify email</p>",
// };

const sendEmail = async (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };
  console.log(UKR_NET_EMAIL, UKR_NET_PASSWORD);
  await transport.sendMail(email);
  return true;
};

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));

module.exports = sendEmail;
