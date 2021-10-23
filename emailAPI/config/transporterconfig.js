var nodemailer = require('nodemailer');

export let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "teachableap@gmail.com",
      pass: "scrkcigbeebvnxxg",
    },
  });