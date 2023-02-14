export default function (req: any, res: any) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'myprojectcls@gmail.com',
            pass: 'lofwmlbllbeexcft',
        },
        secure: true,
    });

    const mailData = {
        from: 'myprojectcls@gmail.com',
        to: 'myprojectcls@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div style="width: 600px; display: flex; justify-content: center; flex-direction: column;,  background-color: #c7c6fb57; border-radius: 10px; padding: 25px; margin: auto;"> <div style="width: 100%; display: flex; justify-content: center; flex-direction: column;">
            <img src="/public/images/logo.png" style="width: 250px; margin: auto;" alt="Logo">
            <h4 style="margin: 0px; font-size: 28px; margin-top: 50px;">${req.body.name}</h4>
            <h4 style="margin: 0px; font-size: 24px;">${req.body.mobile}</h4>
            <h4 style="margin: 0px; font-size: 24px;">${req.body.email}</h4>
            <p style="margin-top: 20px; color: #393939; font-size: 16px;">${req.body.message}</p>
        </div></div>`
    }

    transporter.sendMail(mailData, function (err: any, info: any) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })

    console.log(req.body)
    res.send('success')
}