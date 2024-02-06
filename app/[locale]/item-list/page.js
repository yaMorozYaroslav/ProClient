import {List} from '../../../comps/List/List'
import {Pages} from '../../../comps/Pages/Pages'
//~ import { revalidateTag } from 'next/cache'

async function anyName() {
  const allData = 
        await fetch('https://seed-shop-back-78049b8c30bb.herokuapp.com/items?category=', 
                                 { next: { tags: ['items'] }})
                                         .then((res) => res.json())
    //~ revalidateTag('items')
   const someData = allData.data
   const totalPages = allData.totalPages
  return  {someData, totalPages}
}

export default async function ItemList() {
	const {someData, totalPages} = await anyName()
  return (<>
    <List servData={someData}/>
    <Pages total={totalPages}/>
  </>)}
