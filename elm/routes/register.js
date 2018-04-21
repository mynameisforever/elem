var express = require('express');
var router = express.Router();
var Usermodel = require('../md/user');


router.post('/',function(req,res){
	Usermodel.find({
		username:req.body.username
	},function(err,data){
		if(!err){
			if(data.length==0){
				Usermodel.create({
					username:req.body.username,
					name:Math.random().toString(36).substr(2),
					password:req.body.password
				},function(err,data1){
					if(!err){
						res.send("1");
					}else{
						res.send("0");
					}
				})
			}else{
				res.send("用户已注册");
			}
			
		}
	})
	
})

module.exports = router;