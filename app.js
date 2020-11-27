const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); 

// Connect DB
mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err)); 

// Middleware
app.use(express.json());

// Route
app.use('/user', require('./routes/upload.routes'))

app.listen(5000, () => console.log("Server is running on port 5000"));

