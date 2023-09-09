import express from 'express'
//import Item from '../models/Item.js'
import db from "../conn.js";
import { ObjectId } from "mongodb";

//const router = express.Router()


export const getItems = async(req,res) => {
	try{
		//const { category = 'all'} = req.query
		
		//console.log(category)
		//let items
		//if(category !== 'all') items = await Item.find({category: category})
		//if(category === 'all') items = await Item.find()
		let { category = 'all'} = req.query
		let items
        let collection = await db.collection("products");
       // let results = await collection.find({}).limit(50).toArray();
       if(category !== 'all') items = 
                    await collection.find({category: category}).toArray()
	   if(category === 'all') items = await collection.find({}).toArray()
		res.status(200).json({items})
	}catch(error){
		res.status(404).json({message: error.message})
	}
   }


export const getItem = async(req, res) => {
	try{
		let collection = await db.collection("products")
		let query = {_id: new ObjectId(req.params.id)}
	//console.log(query)
		const item = await collection.findOne(query)
		res.status(200).json(item)
	}catch(error){res.status(404).json({message: error.message})}
}

export const createItem = async(req,res)=> {
      try{
    let item = req.body
    let collection = await db.collection("products")
	const newItem = {...item, 
		             creator: req.userId, 
		             date: new Date().toISOString()}
	let result = await collection.insertOne(newItem)
	 console.log(result)	  
		res.send(newItem).status(204)
	}catch(error){
		res.status(409).json({message: error.message})
	}
}
export const updateItem = async(req, res)=> {
   try{
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
    $push:  req.body 
  };

    let collection = await db.collection("products");
    let result = await collection.updateOne(query, updates)
	/*const {id} = req.params
	const {title, description, creator, photo, price, category, createdAt} = req.body
    
	if(!mongoose.Types.ObjectId.isValid(id)) 
		return res.status(404).send(`No item with id: ${id}`)

	const updatedItem = {creator, title, description, photo, category, price, _id: id, createdAt}
    await Item.findByIdAndUpdate(id, updatedItem, {new: true})*/
    res.send(result).status(201)
}catch(error){
		res.status(409).json({message: error.message})
	}}

export const deleteItem = async(req,res)=> {
	//const {id} = req.params
    const query = { _id: ObjectId(req.params.id) };

    const collection = db.collection("posts");
    let result = await collection.deleteOne(query)
	/*if(!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No post with id: ${id}`)
	await Item.findByIdAndRemove(id)*/
	res.json({message: 'Post deleted', id})
}
//export default router
