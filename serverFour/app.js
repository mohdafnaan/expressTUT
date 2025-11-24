import twilio from "twilio"
import dotenv from "dotenv"
dotenv.config()

async function sendSMS(){
    try {
         const accountSID = process.env.accountSid;
    const accountToken = process.env.accountToken;
    const phoneNumber = process.env.phoneNumber;
    const sender = twilio(accountSID,accountToken);
  

    let message = await sender.messages.create({
        from : phoneNumber,
        to : "+919022442668",
        body : "your OTP is 748343\n from sbi bank"
    })
        console.log("SMS SENT", message.sid);
    } catch (error) {
        console.log(error);
    }
}
sendSMS();