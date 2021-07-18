const express = require("express");
const connect = require("./config/connectDb");
const cors = require("cors");

require("dotenv").config({ path: "./config/config.env" });

const app = express();
connect();
app.use(express.json());
app.use(cors());

app.use("/api/user", require("./routes/user"));
app.use("/api/voiture", require("./routes/voiture"));

const port = process.env.Port || 8000;

app.listen(port, () => {
  console.log(`server open on ${port}`);
});
