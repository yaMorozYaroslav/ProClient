import axios from 'axios'

const base = 'https://itemauthback.herokuapp.com/api/items'

export const getItems =()=> axios.get(base)
export const addItem =(newItem)=> axios.post(base, newItem) 
export const deleteItem =(id)=> axios.delete(`${base}/${id}`)


