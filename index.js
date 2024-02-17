const express = require("express");
const mongoose = require("mongoose");
const router = require("./rotes/rote");
const cors = require("cors");
const compression = require("compression");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(compression());
mongoose
  .connect(
    "mongodb+srv://ghassen:ghassen123@ghassen.tohspqf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connection success");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(router);

app.listen(port, () => {
  console.log("listen  to 3000");
});
