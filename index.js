const express = require('express');
const cors = require("cors");
const pdf = require('html-pdf');
const pdfsample = require('./pdf-sample');

const app = express();
const port = process.env.PORT || 4005;

const allowedOrigins = ['https://fascinating-crumble-60377b.netlify.app'];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfsample(req.body), {}).toFile("Resume.pdf", (err) => {
    if (err) {
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

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
