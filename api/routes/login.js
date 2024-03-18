const router = require("express").Router();
let User = require("../models/user.model");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
router.use(bodyParser.json());

router
  .route("/")
  .get((req, res) => {
    User.find()
      .then((user) => res.json({ result: user }))
      .catch((err) => req.statusCode(400).json("Error: " + err));
  })
  .post(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }
    try {
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(404).json({ message: "User does not exist." });
      }

      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ message: "Error comparing password" });
        }
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.email }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res
          .status(200)
          .json({ message: "Login successful", token, user: user });
      });
    } catch (err) {
      return res.status(500).json({ message: "Error finding user" });
    }
  });

module.exports = router;
