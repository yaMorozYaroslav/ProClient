import axios from 'axios'

//const API = axios.create({baseURL: 'https://item-auth-back-0555af6b9518.herokuapp.com'})
const API = axios.create({baseURL: 'https://prod-auth-back-2c98a10f4500.herokuapp.com'})

//console.log(localStorage.getItem('persist:profile'))

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})
export const getItems =(category)=> API.get(`/items?category=${category}`)
export const createItem =(source)=> API.post('/items', source)
export const editItem =(id, source)=>API.patch(`/items/${id}`, source)
export const deleteItem =(id)=>API.delete(`/items/${id}`)

export const auth =(source)=>API.post('/user/signin', source)
export const register =(source)=>API.post('/user/signup', source)
