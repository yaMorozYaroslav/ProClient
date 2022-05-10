import axios from 'axios'

const base = 'http://localhost:5000/api/items'

export const fetchItems =()=> axios.get(base)