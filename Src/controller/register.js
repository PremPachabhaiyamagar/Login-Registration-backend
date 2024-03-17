const User = require("../model/model");
const bcrypt = require("bcrypt");

const Register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
      res.status(400).send(res.json("User Invalid Please Try Again..!"));
    } else {
      const exist = await User.findOne({ email });
      if (exist) {
        res.status(400).send("Emaill Already Taken ..!");
      } else {
        const user = await new User({ name, email, phone, password });
        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        user.password = undefined;

        res.json({
          ok: true,
          user: user,
          message: "Registration Successfull...?",
        });
      }
    }
  } catch (error) {
    () => console.log("Error in creating user");
    res.status(500).json("Something Went Wrong");
  }
};
module.exports = Register;
