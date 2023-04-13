import jwt from "jsonwebtoken"
import User from '../models/User.js'
import Item from '../models/Item.js'
const secret = 'test'

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const isCustomAuth = token.length < 500;
    
    /*let decodedData

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret)

      req.userId = decodedData?.id
    } else {
      decodedData = jwt.decode(token)

      req.userId = decodedData?.sub
    }    */
    
    next();
  } catch (error) {
    console.log(error)
  }
}
export const delAuth = async(req, res, next) => {
	try{
	const item = await Item.findOne({creator: req.userId})
	const user = await User.findById(req.userId)
	console.log(item, user)
	next()
	}catch(error){console.log(error)}}
