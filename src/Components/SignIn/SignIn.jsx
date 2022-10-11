import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import FileImage from './FileImage'
import './SignIn.css';

const SignIn = () => {
  const [user, setUser] = useState({
    name:'',
    secName:'',
    complite: false,
    img: null,
  })
  const Nav = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(user.name !== '' && user.secName !== ''){
      setUser({...user, complite: true})
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('deadline', [])
      Nav('/time');
      
    }
  }

  return (
    <div className="center">
    <div className='content'>
    <form onSubmit={handleSubmit} className='signin flex'>
        <div className="block">
          <FileImage setUser={setUser} user={user}/>
          <div className="blockUserN">
              <input placeholder='Name' maxLength={13} className='name' type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value}) }/>
              <input placeholder='Second Name' maxLength={13} className='secname' type="text" value={user.secName} onChange={(e) => setUser({...user, secName: e.target.value}) }/>
          </div>
        </div>
        <div className='comein'>
          <button  onClick={handleSubmit}  className='adduser'>ADD</button>
         
        </div>
      </form>
      </div>
      </div>
  )
}

export default SignIn
