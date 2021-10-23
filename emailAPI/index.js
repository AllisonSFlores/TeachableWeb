var express = require('express');
const bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());

app.post("/send",[
(req,res)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: "teachableap@gmail.com",
          pass: "scrkcigbeebvnxxg",
        },
      });
      
    var mailOptions ={
        from:"Teachable <teachableap@gmail.com>",
        to: req.body.email,
        subject:"Prueba desde techableWeb",
        text:"Mundo",
        attachments: [
            {   
                path:'./documents/index.txt'
            }]
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
            res.status(500).jsonp(error.message);
    
        }else{
            console.log("Email enviado")
            res.status(200).jsonp(req.body);
        }
    })
}]);


app.listen(3000,()=>console.log("SERVIDOR EN PUERTO 3000"))