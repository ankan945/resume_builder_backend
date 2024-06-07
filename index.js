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
    const filePath = path.join(__dirname, 'Resume.pdf');
  
    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error('File does not exist:', err);
        return res.status(404).json({ success: false, message: 'File not found' });
      }
  
      // Set the correct Content-Type header
      res.setHeader('Content-Type', 'application/pdf');
  
      // Send the file
      res.sendFile(filePath, (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(500).json({ success: false, message: 'Error sending file' });
        }
      });
    });
  });

//app.use(express.static("../frontend/build"));

app.listen(port ,()=>{
    console.log(`Server is running at port ${port}`);
});