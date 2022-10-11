import React, {useState, useEffect} from 'react'
import AddDeadline from './AddDeadline';
import DeadLine from './DeadLine';
import cl from '../Home.module.css';
const Time_menu = ({setComplited,complited}) => {
    const [deadLineArray, setDeadLineArray] = useState([]);
    const [update, setUpdate] = useState(null);
    useEffect(()=>{
        if(localStorage.getItem('deadline')){
            if(deadLineArray.length ===0){
                setDeadLineArray(JSON.parse(localStorage.getItem('deadline')))
            }
        }
    },[])
    useEffect(()=>{
        if(deadLineArray.length !==0){
            setUpdate(deadLineArray)
        }
    },[deadLineArray])
    useEffect(()=>{
        if(update){
            localStorage.setItem('deadline',JSON.stringify(update))
        }
    },[update])
    const compliteTogle = (id) =>{
        setComplited([...complited,...deadLineArray.filter((item) => item.id === id)])
        setDeadLineArray(([...deadLineArray.filter((item) => item.id !== id)]));
        setUpdate(([...deadLineArray.filter((item) => item.id !== id)]))
    }
  return (
        <div className={cl.user_time}>
        {
        update && update.map((item,id) => <DeadLine compliteTogle={compliteTogle} id={item.id} key={item.id} timer={item}/> 
        )
        }
        <AddDeadline setDeadLineArray={setDeadLineArray} deadLineArray={deadLineArray}/>
    </div>
      )
}

export default Time_menu
