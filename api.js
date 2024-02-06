import axios from 'axios'

const API = axios.create({baseURL:'https://seed-shop-back-78049b8c30bb.herokuapp.com'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
   req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const getItems =(category, type, page, search, sort)=> API.get(
     `/items?category=${category}&type=${type}&page=${page}
                             &search=${search}&sort=${sort}`)
export const createItem =(source)=> API.post('/items', source)
export const editItem =(id, source)=>API.patch(`/items/${id}`, source)
export const deleteItem =(id)=>API.delete(`/items/${id}`)

export const getSeeds =(category, type, page, search, sort)=> API.get(
     `/seeds?category=${category}&type=${type}&page=${page}
                             &search=${search}&sort=${sort}`)
export const createSeed =(source)=> API.post('/seeds', source)
export const editSeed =(id, source)=>API.patch(`/seeds/${id}`, source)
export const deleteSeed =(id)=>API.delete(`/seeds/${id}`)

export const auth =(source)=>API.post('/user/signin', source)
export const register =(source)=>API.post('/user/signup', source)
