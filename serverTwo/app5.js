
import axios from "axios"

// async function apiCall() {
    // try { 
    //     let response = await axios.get("https://ai.suhail.app");
    //     console.log(response.data);
        
    // } catch (error) {
    //     console.log(error);
    // }
    
// }
// apiCall()



// fetch method

async function apicall() {
    try {
        let response = await fetch("https://ai.suhail.app");
        let finaloutput = await response.json()
        console.log(finaloutput);
        
    } catch (error) {
        console.log(error);
    }
    
}
apicall();