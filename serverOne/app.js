//                        get method
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;
 app.use(express.json());

app.get("/home",(req,res)=>{
    try {
        res.status(200).json({msg : "for practice local host"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
});

//                       post method;

app.post("/login",(req,res)=>{
    try {
       
        let userInput = req.body;
        console.log(userInput);
        let password = req.body.password;
        if(password.length < 7){
            return res.status(405).json({msg : `password should be greater than 7 characters`});
        }

        res.status(200).json({msg : "account crearted succesfully"})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})

app.put("/update",(req,res)=>{
    try {
        let password = req.body.password;

        if(password.length < 7){
           return res.status(405).json({msg : "password should be greater than 8 characters!"})
        }
        res.status(200).json({ msg : "password updated successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})

app.delete("/delete",(req,res)=>{
    try {
        let userInput = req.body;
        let user = req.body.user;
        res.status(200).json({ msg : "account deleted successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg  : error})
    }
})

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}/home`);
})