import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000/api'})


export const fetchItems =()=>API.get('/items')
export const createItem = (newPost) => API.post('/items', newPost)
//export const updatePost =(id, updatedPost)=> 
//                     API.patch(`/posts/${id}`, updatedPost)
export const deleteItem = (id) => API.delete(`/items/${id}`)
//export const likePost = (id) => API.patch(`/posts/${id}/likePost`)

export const signIn = (formData)=>API.post('/auth', formData)
export const signUp = (formData)=>API.post('/users', formData)