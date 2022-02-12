const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../../models/User');
const{registerValidation}=require('../../validation');
router.post('/',async (req, res)=>{
	const{error}=registerValidation(req.body);
	if(error)return res.status(400).send(
    error.details[0].message);
  const emailExist = await User.findOne({
  	email: req.body.email});
  if(emailExist)return res.status(400).send(
  	'Email already exists');
  	const salt = await bcrypt.genSalt(10);
const hashedPassword = 
   await bcrypt.hash(req.body.password, salt);

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword
	});
	try{
		const savedUser = await user.save();
		res.send({user: user._id});
	}catch(err){
		res.status(400).send(err);
	}
});
module.exports = router;