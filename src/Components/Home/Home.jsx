import React, { useEffect, useState } from 'react'
import cl from './Home.module.css';
import { Link } from 'react-router-dom';
import User from './Time_User/User';
import Time_menu from './Time_menu/Time_menu';
import Time_Complite from './Time_Complite/Time_Complite';
const Home = () => {
  const [link, setLink] = useState(false)
  const [complited,setComplited] = useState([]);
  console.log(complited)
  return (
    <div className='cont'>
      <div className={cl.active}>
        <button onClick={() => setLink(!link)} className={cl.activate} >{link?'CREATE':'COMPLITE'}</button>
      </div>
      <div className={cl.home}>
        <User/>
        {!link
          ?<Time_menu setComplited={setComplited} complited={complited}/>
          :<Time_Complite complited={complited}/>}
         
      </div>
    </div>
  )
}

export default Home
