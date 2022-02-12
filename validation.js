const Joi = require('@hapi/joi');
const registerValidation =(data)=>{
 const schema = Joi.object({
name: Joi.string() .min(6) .required(),
email: Joi.string() .min(6) .required() .email(),
password: Joi.string() .min(6) .required() });
//const {error} = schema.validate(req.body);
  //if(error)return res.status(400).send(
   // error.details[0].message); 
  return schema.validate(data);
};
const loginValidation =(data)=>{
 const schema = Joi.object({
name: Joi.string() .min(6) .required(),
email: Joi.string() .min(6) .required() .email(),
password: Joi.string() .min(6) .required() });
  return schema.validate(data);
};
module.exports.registerValidation=
                       registerValidation;
module.exports.loginValidation=
              loginValidation;
