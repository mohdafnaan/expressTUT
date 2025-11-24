//JSON WEB TOKEN

import jwt from "jsonwebtoken"


async function encryptData() {
  try {
      let userData = {
        fname : "afnaan",
        roll : 20,
        isAlive : true,
        isSleeping : null
    }
    
    let securityKey = "CFI@EVP1@3";

    //3 params
    // 1st userData ===> object
    // 2nd secretKey ===> secret key
    // 3rd expiresIn ==> in seconds
    let token = await jwt.sign(userData,securityKey,{
        expiresIn: 300
    });
    console.log(token);
  } catch (error) {
    console.log(error);
  }
}
// encryptData()


async function decryption(){
    try {
        let encryptedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmbmFtZSI6ImFmbmFhbiIsInJvbGwiOjIwLCJpc0FsaXZlIjp0cnVlLCJpc1NsZWVwaW5nIjpudWxsLCJpYXQiOjE3NjMzODc5MzgsImV4cCI6MTc2MzM4ODIzOH0.FR-kVy4ARSpbNbvgbEFiCPWlX2sCaSmMpVvfGvUmhBY";

        let securityKey = "CFI@EVP1@3";

        let userData = await jwt.verify(encryptedToken, securityKey);

        console.log(userData);
    } catch (error) {
        console.log(error);
    }
}

decryption()