import React from 'react'
  
  function isOdd(number){
  	return number %2 !== 0
  }
  function isEven(number){
  	return number %2 == 0
  }

  const Func=({numbers, fn})=>{
  	let place = []
    for(let number of numbers){
    	if(fn(number)){
    		place.push(number)
    	}
      } 
    	return place;
  }

export const CallBack =()=>{
	let numbers = [1,2,3,4,5,6,7,8]

	return(
      <Func numbers={numbers} fn={isEven}/>
	);
}