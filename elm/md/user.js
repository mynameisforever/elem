var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var obj={
	username:String,
	name:String,
	password:String
}

var model = mongoose.model('users',new Schema(obj));

module.exports = model;
