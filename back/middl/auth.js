import jwt from "jsonwebtoken"
import User from '../models/User.js'
import Item from '../models/Item.js'
const secret = 'test'

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const isCustomAuth = token.length < 500;
    //console.log(req.params)
    let decodedData

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret)

      req.userId = decodedData?.id
      //console.log(decodedData)
    } else {
      decodedData = jwt.decode(token)

      req.userId = decodedData?.sub
    }    
    
    next();
  } catch (error) {
    console.log(error)
  }
}
export const delAuth = async(req, res, next) => {
	try{
	const id = req.params
	const item = await Item.findById(id.id)
	const user = await User.findById(req.userId)
	if(user.role === 'user')
	console.log(user.role)
	next()
	}catch(error){console.log(error)}}
//item.creator === req.userId||
