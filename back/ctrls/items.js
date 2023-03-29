import express from 'express'
import mongoose from 'mongoose'

import Item from '../models/Item.js'

const router = express.Router()


export const getItems = async(req,res) => {
	try{
		const items = await Item.find()
		res.status(200).json(items)
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
	const {title, description, creator, photo, price, condition} = req.body

	if(!mongoose.Types.ObjectId.isValid(id)) 
		return res.status(404).send(`No item with id: ${id}`)

	const updatedItem = {creator, title, description, photo, condition, price, _id: id}
    await Item.findByIdAndUpdate(id, updatedItem, {new: true})
    res.json(updatedItem)
}

export const deleteItem = async(req,res)=> {
	const {id} = req.params

	if(!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No post with id: ${id}`)
	await Item.findByIdAndRemove(id)
	res.json({message: 'Post deleted', id})
}
export default router
