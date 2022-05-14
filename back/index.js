import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import itemRoutes from './routes/items.js'
//import userRoutes from './routes/user.js'

const app = express()
dotenv.config()

app.use(bodyParser.json())
app.use(cors())

app.use('/items', itemRoutes)
//app.use('/user', userRoutes)

app.get('/', (req,res)=>{
	res.send('Hello to Items API')
})
const PORT = process.env.PORT||5000

mongoose.connect(process.env.CONNECTION_URL)
             .then(()=>app.listen(PORT, ()=>console.log(`Running on ${PORT}`)))
             .catch((error)=>console.log(error.message))
