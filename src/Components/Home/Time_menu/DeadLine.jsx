import React, { useState } from 'react'
import './Deadline.css';
import { Icons } from '../../../img/icons';
import Timer from './Timer';
import cl from '../Home.module.css'
const DeadLine = ({timer, compliteTogle,id}) => {
  const [time, setTime] = useState('')
  const color = {
    'sport':'rgba(250, 46, 185, 0.6)',
    'work': 'rgba(97, 46, 250, 0.6)',
    'social': 'rgba(46, 250, 131, 0.6)',
    'health': 'rgba(250, 46, 46, 0.6)',
    'play': 'rgba(46, 243, 250, 0.6)',
    'study':'rgba(250, 138, 46, 0.6)',
  }
 
  return (
    
     <div className='deadline' style={{background: color[timer.img]}} onClick={()=>compliteTogle(id)}>
        <div className='todo'>
          {Icons[timer.img]}
          <p className='todo-text'>{timer.todoText}</p>
        </div>

        <Timer time={timer.time} id={id} compliteTogle={compliteTogle}/>
  
    </div>
  )
}

export default DeadLine
