import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCounter1, muinusCounter,  } from '../store/action/Action';

const Home = () => {
// let [count , setcount ] =useState(0)
const dispatch =useDispatch();
const selector = useSelector((state)=>state.counterReducer);
console.log(selector.counter)
const addCounter =() =>{
  // setcount(++count)
   dispatch(addCounter1())
}
const minusCounter =() =>{
  // setcount(--count)
  dispatch(muinusCounter())

}

  return (
    <>
    <h1>{selector.counter}</h1> 
    <button onClick={addCounter}>+</button>
    <button onClick={minusCounter}>-</button>
    
    
    </>
  )
}

export default Home 