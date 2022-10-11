import React, { useState } from 'react'
import Modal from '../../Modal/Modal';
import cl from '../Home.module.css';
const AddDeadline = ({setDeadLineArray,deadLineArray}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={cl.add}>
      <button onClick={() => setIsActive(true)} className={cl.addBtn}>
      <img src="https://img.icons8.com/ios-filled/100/000000/add--v1.png" className={cl.add_img}/>
      </button>
      <Modal open={isActive} deadLineArray={deadLineArray} setDeadLineArray={setDeadLineArray} setOpen={setIsActive}/>
    </div>
  )
}

export default AddDeadline
