import {Single} from '../../../../comps/Single/Single'
//~ import { revalidateTag } from 'next/cache'

export const dynamicParams = false

export async function generateStaticParams(){
  const items = await fetch(
    'https://seed-shop-back-78049b8c30bb.herokuapp.com/items?category=')
                                        .then((res) => res.json())
                                        
    return items.data.map((item) => ({id: item._id, locale:'ua'}))
	}
//~ export async function getStaticPaths() {
	 //~ const items = await fetch(
    //~ 'https://seed-shop-back-78049b8c30bb.herokuapp.com/items?category=')
                                        //~ .then((res) => res.json())
      //~ const itemsID = items.data.map((item) => ({id: item._id})) 
      //~ const paths = items.data.map((item) => {
        //~ return {
          //~ params: {
            //~ id: item._id,
            //~ locale: 'ua'
          //~ }
        //~ }
      //~ })
    
      //~ console.log(paths);
    
      //~ return {
        //~ paths,
        //~ fallback: false
      //~ }
    //~ }
 async function getItem(params) {
  
   const item = await fetch(
    `https://seed-shop-back-78049b8c30bb.herokuapp.com/items/${params.id}`)
                                            .then((res) => res.json())
      
         //~ { next: { tags: ['item'] }}
      //~ revalidateTag('item')
   return item

       }
export default async function Item({params}){

	const item = await getItem(params)
	
	return <Single unit={item} params={params}/>
	}
