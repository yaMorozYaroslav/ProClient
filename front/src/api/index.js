import axios from 'axios'

const API = axios.create({baseURL : 'https://itemauthback.herokuapp.com'})

export const getItems =()=> API.get('/api/items')
export const addItem =(newItem)=> API.post('api/items', newItem) 
export const deleteItem =(id)=> API.delete(`api/items/${id}`)


