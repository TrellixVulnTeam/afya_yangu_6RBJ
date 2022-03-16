import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://nashthecoder:dip6Funk!@cluster0.9wssf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT,));

// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// app.use(express.json());
// app.use(require("./routes/record"));
// // get driver connection
// const dbo = require("./db/conn");
// app.listen(port, () => {
//   // perform a database connection when server starts
//     dbo.connectToServer(function (err) {
//     if (err) console.error(err);
//     });
//     console.log(`Server is running on port: ${port}`);
// });
