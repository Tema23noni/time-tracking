import React from 'react';
import './Time_Complite.css';
const Complited = ({elem}) => {
    const date = new Date(elem.date);
  return (
    <div className='complite-item'>
      <p className='txt'>Выполнено</p>
      <div className='item'>
        <p className='item__name'>Название: {elem.todoText}</p>
        <p className='item__date'>дата: {date.getMonth()+1}.{date.getDate()}</p>
        <p className='item__time'>время: {date.getHours()}:{date.getMinutes()} </p>
      </div>
    </div>
  )
}

export default Complited
