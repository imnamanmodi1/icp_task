var express = require("express");
var router = express.Router();
var StringModel = require("../models/string");
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

/* GET home page. */
router.get("*", function(req, res, next) {
  res.render("index", { title: "Node-React-BP" });
});

//making two routes
// for saving random string - model
router.post("/string", (req, res, next) => {
  //destructure req.body
  var { string } = req.body;
  StringModel.create({
    string: string
  });
});

//user login & registration
router.post("/login", (req, res, next) => {
  var { email, password } = req.body;
  User.findOne({ email: email }, (err, userInfo) => {
    //if any error
    if (err) {
      res.json("Something Went Wrong");
    }
    //if no userInfo
    if (!userInfo) {
      return res.json({
        status: 400,
        success: false,
        message: "User Not Found"
      });
    }
    //if the user is found
    if (userInfo !== null) {
      if (bcrypt.compareSync(password, userInfo.password)) {
        const token = jwt.sign({ id: userInfo._id }, "pochiisourdog", {
          expiresIn: "1h"
        });
        res.json({
          status: 200,
          success: true,
          message: "USER_LOGIN_SUCCESSFUL",
          key: token
        });
      }
    }
  });
});

//user registration
router.post("/register", (req, res, next) => {
  var { email, password } = req.body;
  User.create(
    {
      email: email,
      password: password
    },
    (err, result) => {
      if (err) return next(err);
      if (result) {
        res.json({
          status: 200,
          success: true
        });
      }
    }
  );
});

module.exports = router;
