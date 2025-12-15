import React from 'react'
import {useState , useEffect} from 'react'

function MouseTrace() {
    const [mousePossition , setMousePossition] = useState({x:0, y:0});
    

    useEffect(()=>{
        const handleMouse = (e)=>{
        setMousePossition({x:e.clientX, y:e.clientY})
    }
    window.addEventListener('mouseOver', handleMouse);
    console.log(`mouse over: ${mousePossition.x} `);
    return()=>{
        window.removeEventListener('mouseOver',handleMouse)
    }
    },[])
    
    
  return (
    <div>
        <h1>MouseTrace</h1>
        <div><h1>x : {mousePossition.x}</h1></div>
        <div><h1>y :  {mousePossition.y}</h1></div>
    </div>
    
  )
}

export default MouseTrace