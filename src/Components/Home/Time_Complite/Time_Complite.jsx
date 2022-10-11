import React, { useEffect, useState } from 'react'
import './Time_Complite.css';
import Complited from './Complited'
const Time_Complite = ({complited}) => {
  const [complite, setComplite] = useState([])
  useEffect(()=>{
    if(complited.length !== 0){
      localStorage.setItem('complite', JSON.stringify(complited))
    }
    if(localStorage.getItem('complite')){
      setComplite([...complite, ...JSON.parse(localStorage.getItem('complite'))])
    }
  },[])
  return (
    <div className='complite'>
      {
        complite && complite.map(item =>{
              return <Complited key={item.id} elem={item}/>
            })
            
      }
    </div>
  )
}

export default Time_Complite
