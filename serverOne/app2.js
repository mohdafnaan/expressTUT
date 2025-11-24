//                    req methods.

import express, { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT;

//                     get methods
app.post("/home", (req, res) => {
  try {
    let userInput = req.body;
    console.log(userInput);

    res.status(200).json({ msg: "account created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

//                   parms method

app.post("/students/:rollno", (req, res) => {
  try {
    let rollno = req.params.rollno;
    res.status(200).json({ msg : `this api belongs to roll no : ${rollno}`})
  } catch (error) {
    console.log(error);
    res.status(500).json({msg : error})
  }
});
 //                query method
app.post("/studentdetails",(req,res)=>{
    try {
        let studentdetails = req.query;
        console.log(studentdetails);
         
        res.status(200).json({ studentdetails})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg : error})
    }
})
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}/home`);
});