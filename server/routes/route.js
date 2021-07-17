const express = require("express");
const router = express.Router();
const signupSchemaCopy = require("../models/singupModels");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);
  //When user submit the form it will create new instance of our schema and it fill fill all the details which user enter in that schema
  const signedUpUser = new signupSchemaCopy({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: securePassword,
  });
  signedUpUser
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json(error));
});

module.exports = router;
