const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Server is connected Succesfully...");
  })
  .catch((err) => {
    console.log(`Cannot Connect to the Server ${err}`);
  });
