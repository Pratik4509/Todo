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
        if (newTitle === '' || newTitle.length === 0) {
            setValidTitle('border border-red-500 ');
        }
        else if (newTime === '' || newTime.length === 0) {
            setValidTitle('');
            setValidTime('border border-red-500 ');
        }
        else {
            allTasks.push({
                id: newId,
                title: newTitle,
                time: date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear() + ' ' + newTime,
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
                    {/* Input with placeholder effect */}
                    {/* <div class="relative w-full min-w-[200px] h-10">
                        <input
                            autoFocus
                            name="title"
                            id="title"
                            value={newTitle}
                            onChange={e => setNewTitle(e.target.value)}
                            className={validateTitle + "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-purple-500"}
                            placeholder=" " />
                        <label
                            htmlFor="title"
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-purple-500 before:border-blue-gray-200 peer-focus:before:!border-purple-500 after:border-blue-gray-200 peer-focus:after:!border-purple-500">Enter Task
                        </label>
                    </div> */}
                    <label htmlFor="title" className="text-normal text-slate-400">Enter Task</label>
                    <input type="text" autoFocus className={validateTitle + 'p-1 rounded-md border border-slate-200 focus-visible:border-2 focus-visible:border-purple-600  outline outline-none'} name="title" id="title" value={newTitle} onChange={e => setNewTitle(e.target.value)}/>
                    <label htmlFor="time" className="text-normal text-slate-400">Select Time</label>
                    <input type="time" className={validateTime + 'w-full p-1 rounded-md border border-slate-200 focus-visible:border-2 focus-visible:border-purple-600  outline outline-none'} name="time" id="time" value={newTime} onChange={e => setNewTime(e.target.value)} placeholder="Select Time" />
                    <button className="bg-purple-600 text-slate-100 px-6 py-3 font-semibold text-normal" type="submit">
                        Save
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddTodos