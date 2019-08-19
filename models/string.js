var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");
const saltRounds = 10;

var StringModel = new Schema({
  randomString: {
    type: String,
    required: true
  }
});

var StrModel = mongoose.model("StrModel", StringModel);
module.exports = StringModel;
