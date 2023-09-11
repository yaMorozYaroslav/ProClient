import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from "../conn.js";

const secret = 'test'

export const signin = async(req,res)=> {

  try{
	const {email, password} = req.body
	let collection = await db.collection("users")
	const oldUser = await collection.findOne({email})
	
	if(!oldUser) return res.status(404).json({message: "User doesn't exist"})
   
	const isPasswordCorrect = await bcrypt.compare(password, oldUser.password)
    if(!isPasswordCorrect) return res.status(400).json({message: 'Invalid credentials'})

    const token = jwt.sign({email: oldUser.email, id: oldUser._id},
                                            secret, {expiresIn: '1h'} )
    res.status(200).json({user: oldUser, token})
	}catch(err){
		res.status(500).json({message: 'Something went wrong'})
	}
   }
   
    export const signup = async (req, res) => {

  try {
	const { name, email, password} = req.body
    let collection = await db.collection("users")
    const oldUser = await collection.findOne({ email });
    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const template = { email, password: hashedPassword, name: `${name}`, role: 'user' }
    const result = await collection.insertOne(template)
    const newUser = await collection.findOne({email}) 
     
    const token = jwt.sign( { email: result.email, id: result._id },
                                          secret, { expiresIn: "1h" } )

    res.status(201).json({user: newUser, token })
    
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
  }
}
