const express = require('express');
const cors = require("cors");
const pdf = require('html-pdf');
const pdfsample = require('./pdf-sample');

const app = express();
const port = process.env.PORT || 4005;

const allowedOrigins = ['https://fascinating-crumble-60377b.netlify.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-pdf", (req, res) => {
  console.log('Received request to create PDF with data:', req.body);

  pdf.create(pdfsample(req.body), {}).toFile("Resume.pdf", (err, result) => {
    if (err) {
      console.error('Error creating PDF:', err);
      return res.status(500).send(Promise.reject());
    }
    console.log('PDF created successfully:', result);
    res.send(Promise.resolve());
  });
});

app.get("/fetch-pdf", (req, res) => {
  const filePath = `${__dirname}/Resume.pdf`;
  console.log('Fetching PDF from:', filePath);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending PDF file:', err);
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
