var express = require('express');
var router = express.Router();
var Usermodel = require('../md/user')

router.get('/',function(req,res){
	res.render("login",{showErr:false} );
})


router.post('/',function(req,res){
	Usermodel.find({
		_id:req.body.id,
		password:req.body.oldpsd
	},function(err,data){
		if(!err){
			if(data.length!=0){
				Usermodel.update({password:req.body.oldpsd,_id:req.body.id},{$set:{password:req.body.password}}
			,function(err,data){
				if(!err){
					console.log(data);
					res.send("1");
				}else{
					res.send("0");
				}
			})
				
			}else{
				res.send("0");
			}
		}
	})
	
})


module.exports = router;