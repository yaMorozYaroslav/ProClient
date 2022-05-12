import React from 'react'
  
  const separ=(numbers, fn)=>{
  	let place = []
    for(let number of numbers){
    	if(fn(number)){
    		place.push(number)
    	}
      } 
    	return place;
  }

export const CallArray =()=>{
	let numbers = [1,2,3,4,5,6,7,8]
    let strangeNum = separ(numbers,(number) => number %2 != 0)
    let normalNum = separ(numbers, (number)=>number %2 == 0)
	return(
      <p>{strangeNum}, {normalNum}</p>
	);
}