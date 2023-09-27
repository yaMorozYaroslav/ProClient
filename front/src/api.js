import axios from 'axios'

//const API = axios.create({baseURL:'https://auth-prod-back-7afcce7d449f.herokuapp.com'})
const API = axios.create({baseURL:'http://localhost:5000'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
export const getItems =(category,page=1)=> API.get(`/items?category=${category}&page=${page}`)
export const createItem =(source)=> API.post('/items', source)
export const editItem =(id, source)=>API.patch(`/items/${id}`, source)
export const deleteItem =(id)=>API.delete(`/items/${id}`)

export const auth =(source)=>API.post('/user/signin', source)
export const register =(source)=>API.post('/user/signup', source)
