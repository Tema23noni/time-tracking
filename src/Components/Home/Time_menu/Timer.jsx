import React, { useEffect, useState } from 'react'

const Timer = ({time,compliteTogle, id}) => {
    let timeNow = +new Date();
    const [leftTime, setLeftTime] = useState({
        d:'',
        h:'',
        m:'',
        s:''
    })

    const currentTime = () =>{
        timeNow = new Date();
        if(time-timeNow < 0){
            return compliteTogle(id)
        }
        let days =parseInt((time-timeNow) / (1000 * 60 * 60 * 24));
        let hours = parseInt(((time-timeNow) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = parseInt(((time-timeNow) % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = parseInt(((time-timeNow) % (1000 * 60)) / 1000);
    
        setLeftTime({m:(minutes<10)?'0'+minutes+'M':minutes+'M',
                    d:(days<10)?'0'+days+'D':days+'D',
                    h:(hours<10)?'0'+hours+'H':hours+'H',
                    s:(seconds<10)?'0'+seconds+'S':seconds+'S'})
    }    
    useEffect(()=>{
        timeNow = +new Date();
        const interval = setInterval(() => currentTime(),1000);
        return () => clearInterval(interval)
    },[])
    if(leftTime.d ==='00D' &&leftTime.h ==='00H'&& leftTime.m ==='00M'&&leftTime.s ==='00S'){
        compliteTogle(id);
        
    }

    return (
        <div className='timer'>
            <p>{leftTime.d ==='00D'? '' : leftTime.d}</p>
            <p>{leftTime.h=== '00H'?'': leftTime.h}</p>
            <p>{leftTime.m=== '00M'?'': leftTime.m}</p>
            {
                (leftTime.d ==='00D' &&leftTime.h ==='00H')
                &&
                <p>{leftTime.s === '00S'? 'COMPLITE':leftTime.s}</p>
            }
        </div>
    )
}

export default Timer
