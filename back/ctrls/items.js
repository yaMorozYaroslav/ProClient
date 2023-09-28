import express from 'express'
import db from "../conn.js"
import { ObjectId } from "mongodb"

/*export const getItems = async(req,res) => {
	try{
		let { category = 'all'} = req.query
		let items
        let collection = await db.collection("products");
       if(category !== 'all') items = 
                    await collection.find({category: category}).toArray()
	   if(category === 'all') items = await collection.find({}).toArray()
	    console.log(items.length)
	   if(item.length > 10){
		   
		   }
		res.status(200).json({items})
	}catch(error){
		res.status(404).json({message: error.message})
	}
   }*/

export const getItems = async(req,res) => {
	try{    
	   let collection = await db.collection("products")
	   let category = req.query.category
	   // console.log(category)
	  
       const page = req.query.page ? req.query.page : 1;
       const limit = req.query.limit ? req.query.limit : 2;
       const skip = (page - 1) * limit
       let result = await collection.aggregate([
   {$facet: {
    'data':[
      {$match: category?{category: `${category}`}:{}},
      {$skip: parseInt(`${skip}`)},
      {$limit: parseInt(`${limit}`)}								
		    ],
		
	'products' :[{$count: 'count'}],
     }},
     {$unwind: '$products'},
     {$addFields: { totalPages:{ $ceil: {
            $divide: ['$products.count', Number(`${limit}`)]
          }}}}
      ]).toArray()
      
	 //console.log(result)
		res.status(200).json(result[0])
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
		res.send(item).status(200)
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
	//console.log(result)	  
		res.send(newItem).status(204)
	}catch(error){
		res.status(409).json({message: error.message})
	}
}
export const updateItem = async(req, res)=> {
   try{
    const query = { _id: new ObjectId(req.params.id) }
    const {_id, ...rest} = req.body
    const updates = {$set:{...rest, date: new Date().toISOString()}}
    let collection = await db.collection("products")
    const item = await collection.findOne(query)
	
    if(!item)
	 return res.send({message:`No post with id:${query._id}`}).status(404)
	
    let result = await collection.updateOne(query, updates)
    let newItem = await collection.findOne(query)
    res.send(newItem).status(201)
}catch(error){
		res.status(409).json({message: error.message})
	}}

export const deleteItem = async(req,res)=> {
  try{
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("products")
    const item = await collection.findOne(query)
    
	if(!item)
	 return res.send({message:`No post with id:${query._id}`}).status(404)
	 
	let result = await collection.deleteOne(query)
	res.send({ message: 'Post deleted', ...query}).status(200)
}catch(error){res.status(409).json({message: error.message})}
 }
