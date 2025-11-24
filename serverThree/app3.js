import mailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

async function sendEmail(){
    try {
        let appPassword = process.env.PASS;
        let userEmail = process.env.EMAIL;
        
        let userDetails = mailer.createTransport({
            service : "gmail",
            auth : {
                user : userEmail,
                pass : appPassword
            }
        })

        let sender = await userDetails.sendMail({
            from : userEmail,
            to : "suhail@code.in",
            subject : "for nodemailer test",
            text : "hi sir "
        })

        console.log("EMAIL SENT", sender.messageId);
        
    } catch (error) {
        console.log(error);
    }
}
sendEmail();