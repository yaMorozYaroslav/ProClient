import express from 'express'
import mongoose from 'mongoose'

import Item from '../models/Item.js'

const router = express.Router()


export const getItems = async(req,res) => {
	try{
		req.query.page=1
		req.query.limit=5
		const filters = req.query
		console.log(filters.limit)
		const items = await Item.find()
		                          .filters.limit(filters.limit * 1)
                                  .skip((filters.page - 1) * filters.limit)
                                  .exec()
                                  
        const filteredItems = items.filter(item => {
        let isValid = true;
        for (key in filters) {
        console.log(key, item[key], filters[key]);
        isValid = isValid && item[key] == filters[key];
    }
       return isValid;
    })
     console.log(filteredItems)
        const count = await Item.countDocuments() 
         
		res.status(200).json({filteredItems, totalPages: Math.ceil(count/filters.limit), currentPage: page})
	}catch(error){
		res.status(404).json({message: error.message})
	}
   }

export const getItem = async(req, res) => {

	const {id} = req.params
	try{
		const item = await Item.findById(id)
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
