import axios from 'axios'

const baseUrl = 'https://itemauthback.herokuapp.com'

export const fetchItems =()=>axios.get(`${baseUrl}/api/items`)