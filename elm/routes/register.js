var express = require('express');
var router = express.Router();
var Usermodel = require('../md/user');


router.post('/',function(req,res){
	Usermodel.create({
		username:req.body.username,
		name:"mdzz",
		password:req.body.password
	},function(err,data){
		if(!err){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})

module.exports = router;