import express from 'express'
import {getItems, getItem, createItem, updateItem, deleteItem} from '../ctrls/items.js'

const router = express.Router()
//import auth from '../middl/auth.js'

router.get('/', getItems)
router.post('/',  createItem)
router.patch('/:id',updateItem)
router.delete('/:id', deleteItem)

export default router