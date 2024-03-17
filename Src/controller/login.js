const User = require("../model/model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).send("User not found");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(404).send("not a valid password found");
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    // sending response to the client side
    await res.status(200).json({ user, token });
    user.password = undefined;
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = login;
