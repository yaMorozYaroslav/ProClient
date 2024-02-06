import {First} from '../../comps/First/First'
import { Acme } from 'next/font/google'
import {Russo_One} from 'next/font/google'
const lora = Russo_One({ subsets: ['cyrillic'], weight:['400'] })

export default async function Main() {
	
  return <div className={lora.className}><First/></div>
}
