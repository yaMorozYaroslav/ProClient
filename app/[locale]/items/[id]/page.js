import {Single} from '../../../../comps/Single/Single'

export const dynamicParams = false

//~ export async function generateStaticParams(){
  //~ const items = await fetch(
    //~ 'https://seed-shop-back-78049b8c30bb.herokuapp.com/items?category=')
                                        //~ .then((res) => res.json())
                                        
    //~ return items.data.map((item) => ({id: item._id}))
	//~ }
 async function getItem(params) {
  
   const item = await fetch(
    `https://seed-shop-back-78049b8c30bb.herokuapp.com/items/${params.id}`, 
                            { next: { tags: ['item'] }})
                                            .then((res) => res.json())
      //~ revalidateTag('item')
   return item

       }
export default async function Item({params}){
	const item = await getItem(params)
	
	return <Single unit={item} text='item-list'/>
	}
