import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
	title: String,
	description: String,
	price: String,
	creator: String,
	photo: String,
	createdAt: {
		type: Date,
		default: new Date()
	}
})
var Item = mongoose.model('Item', itemSchema)

export default Item
