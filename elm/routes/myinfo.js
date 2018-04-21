var express = require('express');
var router = express.Router();
var Usermodel = require('../md/user')

router.get('/',function(req,res){
	res.render("login",{showErr:false} );
})


router.post('/',function(req,res){
	Usermodel.find({
		_id:req.body.id
	},function(err,data){
		if(!err){
			if(data.length!=0){
				res.send(data);
			}else{
				res.send(data);
			}
		}
	})
})


module.exports = router;