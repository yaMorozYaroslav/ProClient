import jwt from "jsonwebtoken"
import User from '../models/User.js'
//import Item from '../models/Item.js'
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
     
    } else {
      decodedData = jwt.decode(token)

      req.userId = decodedData?.sub
    }    
    
    next();
  } catch (error) {
    res.status(409).json({message: error.message})
  }
}
/*export const roleAuth = async(req, res, next) => {
	try{
	let query = {_id: new ObjectId(req.params.id)}
	let collectProds = await db.collection("products")
	let collectUsers = await db.collection("users")
	const item = await collection.findOne(query)
	//const item = await Item.findById(id.id)
	const user = await collection.findOne(req.userId)
	if(user.role === 'admin'||req.userId === item.creator){next()}
	else{throw new Error('User cannot perform the action')}
	
	}catch(error){console.log(error)}}*/


