import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000/api'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(
                              localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchPosts =()=>API.get('/items')
export const createPost = (newPost) => API.post('/items', newPost)
export const updatePost =(id, updatedPost)=> 
                     API.patch(`/items/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/items/${id}`)
export const likePost = (id) => API.patch(`/items/${id}/likePost`)

export const signIn = (formData)=>API.post('/auth', formData)
export const signUp = (formData)=>API.post('/users', formData)