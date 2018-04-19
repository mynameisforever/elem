var express = require('express');
var router = express.Router();
var Usermodel = require('../md/user')

router.get('/',function(req,res){
	res.render("login",{showErr:false} );
})


router.post('/',function(req,res){
	Usermodel.find({
		username:req.query.username,
		password:req.query.password,
	},function(err,data){
		if(!err){
			if(data.length!=0){
				res.send(1);
			}else{
				res.send(0)
			}
		}
	})
})
