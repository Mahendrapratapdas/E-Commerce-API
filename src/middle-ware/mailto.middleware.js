import nodemailer from 'nodemailer';

async function sendMail(stackTrace){
    console.log("inside the send mail func")
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'mahendr@gmail.com',
            pass:'mahi'
        }
    });

    const mailOptions = {
        from:'mahendra@gmail.com',
        to:'mahendrap@gmail.com',
        subject:'Exception Occure in the production server',
        text:stackTrace
    }
    try{
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    }catch(err){
        console.log("some error in sending mail------ "+err)
    }
}

export default sendMail;
