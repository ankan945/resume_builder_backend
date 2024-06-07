const express = require('express');
const cors = require("cors");
const pdf = require ('html-pdf');
const pdfsample = require('./pdf-sample');


const app = express();


const port = process.env.PORT || 4005;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.post("/create-pdf",(req,res)=> {
    pdf.create(pdfsample(req.body),{}).toFile("Resume.pdf",(err)=> {
        if(err){
            res.send(Promise.reject());
            console.log(err);
        }
        res.send(Promise.resolve());
        console.log("Success");
    });
});

app.get("/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
  });


//app.use(express.static("../frontend/build"));

app.listen(port ,()=>{
    console.log(`Server is running at port ${port}`);
});