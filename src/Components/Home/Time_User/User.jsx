import {React,useState} from 'react'
import cl from '../Home.module.css';
const User = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
  return (
    <div className={cl.user}>
    <img className={cl.img}src={"https://img.icons8.com/material-outlined/96/000000/user--v1.png"} alt="" />
    <div className={cl.user_profile}>
      <p className={cl.txt}>Профиль</p>
      <div className={cl.user_name}>  
        <p>{user? user.name:''}</p>
        <p>{user? user.secName:''}</p>
      </div>
    </div>
  </div>
  )
}

export default User
