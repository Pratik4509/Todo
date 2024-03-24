import React, { useContext, useId, useState } from 'react'
import DateSection from './DateSection'
import { useNavigate } from "react-router-dom";
import TodoContext from '../context/TodoContext';

const AddTodos = () => {
    const [newTitle, setNewTitle] = useState('');
    const [newTime, setNewTime] = useState('');
    const [validateTitle, setValidTitle] = useState('');
    const [validateTime, setValidTime] = useState('');
    const navigate = useNavigate()
    const [tasks, setTasks] = useContext(TodoContext)
    const date = new Date()
    const newId = useId()
    const saveTodo = (e) => {
        e.preventDefault()
        const allTasks = [...tasks]
        if(newTitle === '' || newTitle.length === 0 ){
            setValidTitle('border border-red-500 ');
        } 
        else if(newTime === '' || newTime.length === 0){
            setValidTitle('');
            setValidTime('border border-red-500 ');
        } 
        else {
            allTasks.push({
                id: newId,
                title: newTitle,
                time: date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+' '+newTime,
                showTime: newTime,
                complete: false, 
            })
            setTasks(allTasks)
            setNewTitle('')
            setNewTime('')
            navigate('/')
        }
    }

    

    return (
        <>
            <DateSection showAdd={false} />
            <div className="h-screen">
                <form onSubmit={saveTodo} className='p-6 flex flex-col gap-4 text-sm font-normal text-slate-600'>
                    <label htmlFor="title">Enter Task</label>
                    <input type="text" autoFocus className={validateTitle+ 'p-1'} name="title" id="title" value={newTitle} onChange={e=>setNewTitle(e.target.value)} placeholder="Enter Task"/>
                    <label htmlFor="time">Select Time</label>
                    <input type="time" className={validateTime+ 'p-1'} name="time" id="time" value={newTime} onChange={e=>setNewTime(e.target.value)} placeholder="Select Time"/>
                    <button className="bg-purple-600 text-slate-100 px-6 py-3 font-semibold text-normal" type="submit">
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddTodos