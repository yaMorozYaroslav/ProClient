import express from 'express'
import mongoose from 'mongoose'

import Item from '../models/Item.js'

const router = express.Router()


export const getItems = async(req,res) => {
	try{
		const {page = 1, limit = 5, category = 'all'} = req.query
		
		//console.log(category)
		
		let count
		if(category !== 'all') count = await Item.countDocuments({category: category})
		if(category === 'all') count = await Item.countDocuments()
		console.log(count)
		let items
		if(category !== 'all') items = await Item.find({category: category}).limit(limit * 1).skip((page - 1) * limit).exec()
		if(category === 'all') items = await Item.find().limit(limit * 1).skip((page - 1) * limit).exec()
        
		res.status(200).json({items, count})
	}catch(error){
		res.status(404).json({message: error.message})
	}
   }


export const getItem = async(req, res) => {
	try{
		const {id} = req.params
	console.log(id)
		const item = await Item.findById(id)
		console.log(item)
		res.status(200).json(item)
	}catch(error){res.status(404).json({message: error.message})}
}

export const createItem = async(req,res)=> {

	const item = req.body
	const newItem = new Item({
		  ...item, creator: req.userId, createdAt: new Date().toISOString()})
	try{
		await newItem.save()
		res.status(201).json(newItem)
	}catch(error){
		res.status(409).json({message: error.message})
	}
}
export const updateItem = async(req, res)=> {

	const {id} = req.params
	const {title, description, creator, photo, price, category, createdAt} = req.body
    
	if(!mongoose.Types.ObjectId.isValid(id)) 
		return res.status(404).send(`No item with id: ${id}`)

	const updatedItem = {creator, title, description, photo, category, price, _id: id, createdAt}
    await Item.findByIdAndUpdate(id, updatedItem, {new: true})
    res.status(201).json(updatedItem)
}

export const deleteItem = async(req,res)=> {
	const {id} = req.params

	if(!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No post with id: ${id}`)
	await Item.findByIdAndRemove(id)
	res.json({message: 'Post deleted', id})
}
export default router
