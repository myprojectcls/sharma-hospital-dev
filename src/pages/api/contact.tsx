export default function (req: any, res: any) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'myprojectcls@gmail.com',
            pass: '',
        },
        secure: true,
    });

    const mailData = {
        from: 'myprojectcls@gmail.com',
        to: 'myprojectcls@gmail.com',
        // to: `${req.body.email}`,
        // cc: 'myprojectcls@gmail.com',
        subject: `From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div style="width: 600px; background-color: #c7c6fb57; border-radius: 10px; padding: 25px; margin: auto;">
        <table style="width: 100%; border: 1px solid #ccc; padding: 20px; border-radius: 10px;">
            <tr>
                <th colspan="2"
                    style="border-bottom: 1px solid #ccc; height: 40px; text-align: center; font-size: 24px;">Customer
                    Details</th>
            </tr>
            <tr>
                <th style="text-align: left;">Name</th>
                <td>${req.body.name}</td>
            </tr>
            <tr>
                <th style="text-align: left;">Mobile</th>
                <td>${req.body.mobile}</td>
            </tr>
            <tr>
                <th style="text-align: left;">Email</th>
                <td>${req.body.email}</td>
            </tr>
            <tr>
                <th style="text-align: left;">Message</th>
                <td>${req.body.message}</td>
            </tr>
        </table>
    </div>`
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