'use client'
import React from 'react'
import * as S from './single.styled'
//import {AddForm} from '../AddForm/AddForm'
import Image from 'next/image'

export const Single =({unit, text})=>{
	
	
  return (<S.Container>		              
             <Image style ={{marginTop:"150px"}}
                    alt='' src={unit.photo&&unit.photo.length?unit.photo:'/next.svg'}
                    width={100} height={100} priority={true}/><br/>
             <S.Paragraph>{unit.title}</S.Paragraph>
             <S.Paragraph>{unit._id}</S.Paragraph>
             <S.Paragraph>category: {unit.category||'none'}</S.Paragraph>  
             <S.Paragraph>type: {unit.type||'none'}</S.Paragraph>  
	         <S.Paragraph>price = {unit.price}</S.Paragraph>
  <S.StyledLink href={`/${text}`}>Back To List</S.StyledLink>
	</S.Container>)
	}

