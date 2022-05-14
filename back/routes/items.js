import express from 'express'
import {getItems, getItem, createItem, updateItem, deleteItem} from '../ctrls/items.js'

const router = express.Router()
import auth from '../middl/auth.js'

router.get('/', getItems)
router.post('/',  auth, createItem)
router.patch('/:id', auth, updateItem)
router.delete('/:id', auth, deleteItem)

export default router