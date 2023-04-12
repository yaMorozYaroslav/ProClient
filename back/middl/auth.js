import jwt from "jsonwebtoken"
import User from '../models/User.js'
const secret = 'test'

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const isCustomAuth = token.length < 500;
    
    let decodedData

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret)

      req.userId = decodedData?.id
    } else {
      decodedData = jwt.decode(token)

      req.userId = decodedData?.sub
    }    
    console.log(decodedData)
    const user = await User.findById(req.userId)
    console.log(user) 
    next();
  } catch (error) {
    console.log(error)
  }
}

export default auth
