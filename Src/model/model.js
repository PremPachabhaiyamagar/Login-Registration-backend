const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    uppercase: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    validate: function (value) {
      return validator.isEmail(value);
    },
    message: "User Already Exists...",
  },
  phone: {
    type: Number,
    unique: true,
    min: 10,
  },
  password: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    min: 8,
    max: 10,
  },
});
const User = new mongoose.model("Userdb", userSchema);
module.exports = User;
