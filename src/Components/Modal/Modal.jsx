import React, { useEffect, useRef, useState } from 'react'
import './Modal.css'
const Modal = ({open, setOpen, setDeadLineArray,deadLineArray}) => {
    
    const [hour, setHour] = useState('12');
    const [min, setMin] = useState('30');
    const [todoText, setTodoText] = useState('')
    const [createTimer, setCreateTimer] = useState(null);
    const [select,setSelect] = useState(null);
    const [days, setDays] = useState();
    useEffect(() =>{
        if(!open){
            setHour('12');
            setMin('30');
            setTodoText('');
            setSelect(null);
            setDays([])
        }
    },[open])
    useEffect(() =>{
        if(createTimer){
            setDeadLineArray([...deadLineArray, createTimer])
        }

    },[createTimer])
    if(!open)return
    const checkNum = (type) =>{
        if( Number(hour)< 24 && Number(hour)>=0 &&  Number(min)<= 59 && Number(min)>=0){
            switch(type){
                case 'min-minus':
                    if(Number(min) === 0) return
                    setMin(Number(min)-1)
                    break;
                case 'hour-minus':
                    if(Number(hour) === 0) return
                    setHour(Number(hour)-1)
                    break;
                case 'min-plus':
                    if(Number(min) === 59) return
                    setMin(Number(min)+1)
                    break;
                case 'hour-plus':
                    if(Number(hour) === 23) return
                    setHour(Number(hour)+1)
                    break;    
            }
        }else{
            alert('Введено не коректное время')
        }
    }
  
    const send = () =>{
        if(Number(min)===0 && Number(hour)===0) return;
        let day = new Date();
        if(todoText !== null && Number(min)>=0&&Number(min)<=59 && Number(hour)<=23 && Number(hour)>=0 && select!== null){

            if(day.getDay() === Number(days) && day.getHours() <= Number(hour)){
                if(day.getHours() === Number(hour) && day.getMinutes() < Number(min)){
                    day = new Date(day.getFullYear(), day.getMonth(),day.getDate(),Number(hour), Number(min))
                }
                if(day.getHours() < Number(hour)){
                    day = new Date(day.getFullYear(), day.getMonth(),day.getDate(),Number(hour), Number(min))
                }
                
            }else{
                let date = new Date(day.setDate(day.getDate()+(days - 1 - day.getDay()+7)% 7 + 1)).getDate();
                day.setDate(date);
                day.setHours(Number(hour))
                day.setMinutes(Number(min), 0,0)
            }
            
            setCreateTimer({
                todoText:todoText,
                time: +day,
                date: day,
                id: Date.now(),
                delete:false,
                days: days,
                img: select})
            setOpen(!open) 
        }
        setHour('12');
        setMin('30');
        setTodoText('');
        setSelect(null);
        setDays([])
           
                
    }


    
    return (
        <div className='modal' onClick={() => {setOpen(false)}}>
            <div className='modal-active' onClick={e => e.stopPropagation()}>
                <div className='creative-deadline'>
                    <div>
                        <div className='todo'>
                            Введите занятие
                            <input type="text"  value={todoText} onChange={(e) => setTodoText(e.target.value)} />
                        </div>
                        <div className='deadline-todo'>
                            Введите время
                            <div className="time">
                                <div className="input-number">
                                    <div className="input-number__minus" onClick={() =>checkNum('hour-minus')}>-</div>
                                    <input name='hour' className="input-number__input" type="text"  value={hour} onChange={(e => setHour(e.target.value))}/>
                                    <div className="input-number__plus" onClick={()=>checkNum('hour-plus')}>+</div>
                                </div>
                                :
                                <div className="input-number">
                                    <div className="input-number__minus" onClick={()=>checkNum('min-minus')}>-</div>
                                    <input name='min' className="input-number__input" type="text" value={min} onChange={e => setMin(e.target.value)}/>
                                    <div className="input-number__plus" onClick={()=>checkNum('min-plus')}>+</div>
                                </div>
                            </div>
                        </div>
                        <div className='dayToDo'>
                            <select className='icons' onChange={(e) => setDays(e.target.value)}>
                            <option className='icon-select'disabled selected>Выбирете день</option>
                                <option value={1}>Понедельник</option>
                                <option value={2}>Вторник</option>
                                <option value={3}>Среда</option>
                                <option value={4}>Четверг</option>
                                <option value={5}>Пятница</option>
                                <option value={6}>Суббота</option>
                                <option value={0}>Воскресенье</option>
                            </select>
                            <select  onChange={(e) => setSelect(e.target.value)} className='icons'>
                            <option className='icon-select'disabled selected>Выбирете действие</option>
                            <option value="sport">Спорт</option>
                            <option value='work'>Работа</option>
                            <option value="play">Игры</option>
                            <option value="study">Обучение</option>
                            <option value="social">Встречи</option>
                            <option value="health">Здоровье</option>
                        </select>
                        </div>
    
                    </div>
                    <div className="send_deadline">
                        <button onClick={() => send() }>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
