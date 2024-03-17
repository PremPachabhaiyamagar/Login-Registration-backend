require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("./db/conn");
const Port = process.env.PORT || 5000;
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
  origin: "*",
};
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use("/api", require("./routes/user"));
app.get("/", async (req, res) => {
  res.send("this is from server side");
});
app.listen(Port, () => {
  console.log(`Server is running under Port ${Port}`);
});
