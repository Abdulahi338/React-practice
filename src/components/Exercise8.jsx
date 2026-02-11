import React, { useEffect, useState } from 'react'

export default function Exercise8() {
    const [time , setTime]=useState(0);
    const [isRunnig , setIsRunnig] = useState(false);
    
    useEffect (()=>{
        let timerID;
        if(isRunnig && time >0){
             timerID = setInterval(()=>{
            setTime((pre)=>pre-1)
        },1000)
        }
        if(time == 0 && isRunnig){
            setIsRunnig(false);

        }
       

        return ()=> clearInterval(timerID)
        

    },[isRunnig,time

    ])
    const handileStart =()=>{
        setIsRunnig(true)
    }
    
    const handleStop = ()=>{
        setIsRunnig(false);
    }

    const handleRestart = ()=>{
        setTime(0);
        setIsRunnig(false)
    }
    
  return (
    <div>
        <h1>Count Down Timer </h1>
        <div> <h2>Set Time (Seconds):
            <input type="text" value={time} onChange={(e)=>setTime(e.target.value)} />
            </h2>
        </div>
        <div>
            <h2>Time left :{time}</h2>
        </div>
        <div>
            <button disabled = {isRunnig} onClick={handileStart} >Start</button>
            <button disabled={!isRunnig} onClick={handleStop}>Stop</button>
            <button onClick={handleRestart}>Reset</button>
        </div>

    </div>

  )
}
