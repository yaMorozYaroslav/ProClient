import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
//import { MongoClient, ServerApiVersion } from "mongodb"

import itemRoutes from './routes/items.js'
import userRoutes from './routes/user.js'

const app = express()


app.use(bodyParser.json({limit: '50mb'}))
app.use(cors())

app.use('/items', itemRoutes)
app.use('/user', userRoutes)

app.get('/', (req,res)=>{
	res.send('Hello to Items API')
})
const PORT = process.env.PORT||5000
/*mongoose.set('strictQuery', false)
mongoose.connect(process.env.CONNECTION_URL)
             .then(()=>app.listen(PORT, ()=>console.log(`Running on ${PORT}`)))
             .catch((error)=>console.log(error.message))
*/

//const uri = "mongodb+srv://Yaroslav:HorHor37@cluster0.tlfsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

/*export const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("myFirstDatabase").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/
app.listen(PORT, ()=>console.log(`Running on ${PORT}`))
