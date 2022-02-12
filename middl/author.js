const config = require('config');
const jwt = require('jsonwebtoken');
function author(req,res,next){
	const token = req.header('x-auth-token');
	if(!token)	 
	return res.status(401).json({msg: 
		'No token, denied'});
		try{
	  const decoded = jwt.verify(
	  token, config.get('jwtSecret'));
         req.user=decoded;
         next();
		}catch(e){
			res.status(400).json({
				msg: 'Token isnt valid'});
		}}
	module.exports = author;
