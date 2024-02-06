'use client'
import React from 'react'
//~ import Link from 'next/link'
//~ import FileBase from 'react-file-base64'
import { usePathname } from '../../../navigation';
import {useSeedContext} from '../../../context/seeds/SeedState'
import {useItemContext} from '../../../context/items/ItemState'
import {useQueryContext} from '../../../context/queries/QueryState'
import * as S from './add-form.styled'
import revalidator from '../revalidator'
import {seedTypes, itemTypes} from '../select-types'

import {useTranslations} from 'next-intl'
import {convert64} from './convert-base64'

const initialState = {title: '', description: '', price: '', 
	                  category: '', type: '', photo: ''}

export function AddForm({setOpen, currItem, setCurrItem}){
	const t = useTranslations("AddForm")
	const tc = useTranslations("categories")
	const tt = useTranslations("types")
	const [source, setSource] = React.useState(initialState)
	const [label, setLabel] = React.useState(t('no file'))
	
	const uploadImage = async(e) => {
		const file = e.target.files[0]
		console.log(file)
		if(file && file.size > 10000000){alert('File is bigger than 10MB.')
		}else{
		const base64 = await convert64(file)
		
		var stringLength = base64.length - 'data:image/png;base64,'.length;
        var sizeInBytes = 4 * Math.ceil((stringLength / 3))*0.5624896334383812;
        var sizeInKb=sizeInBytes/1000;
		console.log(sizeInKb)
		console.log(source)
		setSource({...source, photo: base64})}
		setLabel(file.name)
		}
		 //~ console.log(source)
	
	const pathname = usePathname()
	const isSeed = pathname === '/seed-list'
	
	const {addSeed, updateSeed, fetchSeeds} = useSeedContext()
	const {addItem, updateItem, fetchItems} = useItemContext()
	const {state} = useQueryContext()
	
	const ref = React.useRef()
   
   const fetcher =()=> isSeed?fetchSeeds(state):fetchItems(state)
   
    let categories
    if(isSeed){ categories = ['', 'flowers', 'veggies', 'seedlings']
	}else{categories = ['', 'soils', 'supplements', 'equipment']}
    
    React.useEffect(()=>{		
	       	   if(currItem._id)setSource(currItem)       
	       },[currItem])

    const reset =()=> {	
		setCurrItem({})
		setSource(initialState)
		ref.current.reset()
		}
		
		       
     let currType
	{categories.map((category,i) => {
		            if(source.category===category&&category.length){
						           currType = Object.values(
		                           !isSeed?itemTypes:seedTypes)[isSeed?i-1:i-1]}})}
   
	
		
	const handChange =(e)=> setSource({...source, [e.target.name]: e.target.value})
	
	const changeBorder =(e)=> {
			e.target.style.border = '2px solid purple'
			setTimeout(() => e.target.style.border = null, 1000)
			}
	
	const handClose =(e)=> {e.preventDefault();setOpen(false);}
	
	const handSubmit =(e)=> {
		e.preventDefault()
	if(isSeed){if(!source._id){addSeed(source)		           
	          }else{updateSeed(source._id, source)}
			 
   }else{if(!source._id){addItem(source)		           
	          }else{updateItem(source._id, source)}  }
        reset()
	    setOpen(false)
		     setTimeout(() => {
					alert('Element has been '+
	                      (!source._id?'added.':'updated.'))},1000)
	    fetcher()
	    revalidator()
		        }
	//~ <div className='file-base'>
	   //~ <label>Photo: </label><br/>
      //~ <FileBase          
                         //~ type="file"
                         //~ multiple={false}
                         //~ onDone={({base64})=>setSource({
                            //~ ...source, photo: base64})}/><br/></div>
	 return(
	<S.ExtraCont>
	 <S.Container>
	 
	 <S.Title>{!isSeed?t('item'):t('seed')}</S.Title>
	<S.Form onSubmit={handSubmit} ref={ref}>
	
	 <label>{t('title')}:</label>
	 <S.Input name='title' 
	          value={source.title}    
	          onChange={handChange}
	                     required/><br/>
	 
	 <label>{t('description')}:</label><br/>
	 <S.Textarea name='description'
	              value={source.description} 
	              onChange={handChange}
	                              required/><br/>
	 
	 <label>{t('price')}:</label>
	 <S.Input name='price'
	        value={source.price}
	        onChange={e=>setSource(
				          {...source,
						   price: Number(e.target.value)||0})}
	                                               required/>$<br/>
   <S.Selector>
      <label>{t('photo')}:&#160;</label>
	  <S.PhotoBut htmlFor="input">{t('select')}</S.PhotoBut>
	  <S.Selected>{label}</S.Selected>
	  <input type='file' id="input" style={{display:"none"}}
	         onChange={(e)=>uploadImage(e)}/><br/>
   </S.Selector> 
       
	 <S.CatLabel>{t('category')}:</S.CatLabel>
	 <S.CatSelect name='category'
	             value={source.category}
	             onChange={handChange} >
	             
	{categories.map((item, i) => 
		<S.Option key={i} value={item}>{!item?null:tc(`${item}`)}</S.Option>)}
	 </S.CatSelect><br/>
	 
	 <S.TypeLabel>{t('type')}:</S.TypeLabel>
	 <S.TypeSelect name='type'
	         value={source.type}
	         onChange={handChange}
	          >
	     {currType && currType.map((item,i) => 
			   <S.Option key={i} value={item}>{!item?null:tt(`${item}`)}</S.Option>)}
	 </S.TypeSelect><br/>
	
                            
	     <S.Submit onMouseOver={changeBorder} type='submit'>{t('save')}</S.Submit>
	     <S.Close onMouseOver={changeBorder} 
	              onClick={handClose}>{t('close')}</S.Close>
	
	   </S.Form>
	 </S.Container>
	</S.ExtraCont>
	 )
	}
