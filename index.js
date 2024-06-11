const express = require('express');
const cors = require("cors");
const pdf = require('html-pdf');
const pdfsample = require('./pdf-sample');

const path = require('path'); 
const fs = require('fs'); 

const app = express();

const port = process.env.PORT || 4005;

app.use(cors({
    credentials: true,
    origin: 'https://ankanresume.netlify.app/',
    methods: ['GET', 'POST', 'OPTIONS'], // Ensure OPTIONS is included for preflight
    allowedHeaders: ['Content-Type'] // Specify allowed headers
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-pdf", (req, res) => {
    pdf.create(pdfsample(req.body), {}).toFile("Resume.pdf", (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ success: false, message: 'Internal Server Error' });
        }
        console.log("Success");
        res.status(200).send({ success: true, message: 'PDF Created' });
    });
});

// Route to fetch PDF
app.get("/fetch-pdf", (req, res) => {
    const filePath = path.join(__dirname, 'Resume.pdf');

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error('File does not exist:', err);
            return res.status(404).send({ success: false, message: 'File not found' });
        }

        // Set the correct Content-Type header
        res.setHeader('Content-Type', 'application/pdf');

        // Send the file
        res.sendFile(filePath, (err) => {
            if (err) {
                console.error('Error sending file:', err);
                return res.status(500).send({ success: false, message: 'Error sending file' });
            }
        });
    });
});
app.listen(port, () => {
    console.log(Server is running at port ${port});
});