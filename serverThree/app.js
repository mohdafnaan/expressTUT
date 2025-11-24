import bcrypt from "bcrypt" ;
// async function hashPass(){
//     try {
//         let myPassword = "afnaan1234@";
//         console.log(myPassword);
//         let hashing = await bcrypt.hash (myPassword, 10);
//         console.log(hashing);

//     } catch (error) {
//         console.log(error);
        
//     }
// }
// hashPass();





// async function verifyHash() {
//     let hashValue = "$2b$10$grT4sX/rDQM7PUCr8FO6busoRtJ4Xdww2dClpRUnAozD/U4FvaXcK";
   
//     let userInput = "afnaan1234@";

//     let verifyUser = await bcrypt.compare(userInput, hashValue);


//     if(verifyUser === true){
//         console.log("login succesfull");
//     } else {
//         console.log("login failed");
//     }
// }

// verifyHash()



// setting hashPass.

async function hashPass(){
   try {
     let myPassword = "afnaan1234";
    console.log(myPassword);

    let hashValue = await bcrypt.hash(myPassword,10);
    console.log(hashValue);

   } catch (error) {
    console.log(error);
   }
}
// hashPass();


// recieiving pass.

async function verifyUser(){
    try {
        let myPassword = "afnaan1234";
        let hashValue = "$2b$10$bXOEH3UHFXRbwXCarDQQAOXS7.UIGE7i06hOisuO5mENA0pARxAja";

        let verifyHash = await bcrypt.compare(myPassword,hashValue)

        if(verifyHash == true){
            console.log("verified succesfully");
        } else {
            console.log("failed");
        }
        
    } catch (error) {
        console.log(error);
    }
}
verifyUser();
