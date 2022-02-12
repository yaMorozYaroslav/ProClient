const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const{loginValidation}=require('../../validation');
const author = require('../../middl/author');
const router = express.Router();
const User = require('../../models/User');
router.post('/', async(req, res)=>{
  const{error}=loginValidation(req.body);
    if(error)return res.status(400).send(
    error.details[0].message);
  const user =await User.findOne({
    email: req.body.email
  });
   if (!user)return res.status(400)
    .send('Email isnt found');
   const validPass = await bcrypt.compare(
    req.body.password, user.password);
   if(!validPass)return res.status(400)
    .send('Invalid password');
   const token = jwt.sign({_id: user._id},
               config.get('jwtSecret'));
   res.header('auth-token', token).send(token);
});
router.get('/user', author,(req,res)=>{
  const user = User.findById(req.user._id)
  .select('-password')
  .then(user=>res.json(user));
});
module.exports = router;