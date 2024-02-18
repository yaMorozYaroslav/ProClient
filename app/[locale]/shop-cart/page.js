import {Cart} from '../../../comps/Cart/Cart'

async function anyName() {
  const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
    method: 'POST',
    headers: {},
    body: JSON.stringify({
  "apiKey": "eee3a5f0b4d1ba07016827f6dff25e86",
   "modelName": "Address",
   "calledMethod": "getSettlementAreas",
   "methodProperties": {
     "Ref" : ""
   }
    })      
   //~ JSON.stringify({ time: new Date().toISOString() }),
  }, { next: { tags: ['regions'], revalidate: 1000}}) 
  const data = await res.json()
  //~ const regions = data.data.map(({description, ...rest})=>description)
  const regions = data.data.map(({Description, Ref, ...rest})=> ({name:Description,
	                                                             ref: Ref}))
  return {regions}
}

export default async function ShopCart(){
	const {regions} = await anyName()
    //~ revalidateTag('items')
   //~ const someData = allData.data
  //~ return  {someData}
	return (<Cart servData={regions} />)
	}
