import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext'

const TodoList = () => {
    const [tasks, setTasks] = useContext(TodoContext)
    const [incompletedTasks, setIncompletedTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])

    useEffect(() => {
        console.log("in effect")
        console.log(tasks)
        const newArr = tasks.toSorted((a, b) => a.time.localeCompare(b.time))
        const filtered = newArr.filter(task => task.complete === false)
        setIncompletedTasks(filtered)

        const conpletedNewArr = tasks.toSorted((a, b) => a.time.localeCompare(b.time))
        const completedfiltered = conpletedNewArr.filter(task => task.complete !== false)
        setCompletedTasks(completedfiltered)

    }, [tasks])


    const removeTask = (id) => {
        const newTask = [...tasks]
        const newTasks = newTask.filter(task => task.id !== id)
        setTasks(newTasks)
    }
    
    const handleCheckbox = (id) => {
        const newTask = [...tasks]
        const newTasks = newTask.map(task=>{
            task.id === id && (task.complete = !task.complete) ;
        })
        console.log(newTask)
        // newTask[id]['complete'] = !newTask[id]['complete']
        setTasks(newTask)
        console.log(tasks)
    }
    return (
        <>
            {/* for displying incomplete tasks */}
            <ul className="divide-y-2">
                {incompletedTasks.map(task => {
                    return (
                        <li key={task.id} className='p-6 flex gap-4 items-center'>
                            <input type="checkbox" name="" id="" onChange={() => handleCheckbox(task.id)} />
                            <div className="grow w-2/4">
                                <p className={(task.complete ? 'line-through ' : '') + 'text-sm font-normal text-slate-600 line-clamp-2 mb-2'}>{task.title}</p>
                                <p className='text-xs font-normal text-slate-400'>{task.showTime}</p>
                            </div>
                            <div onClick={() => removeTask(task.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-sm transition duration-200 ease-in-out hover:scale-125">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {/* <hr /> */}
            {/* for displaying completed tasks */}
            <div className="flex items-center after:content-[''] after:h-0.5 after:bg-[#e9e9e9] after:grow before:content-[''] before:h-0.5 before:bg-[#e9e9e9] before:grow">
                <span className="px-2 text-sm font-normal text-slate-600 italic">Completed</span>
            </div>
            <ul className="divide-y-2">
                {completedTasks.map(task => {
                    return (
                        <li key={task.id} className='p-6 flex gap-4 items-center'>
                            <input type="checkbox" defaultChecked={true} name="" id="" onChange={() => handleCheckbox(task.id)} className="checked:bg-purple-500" />
                            <div className="grow w-2/4">
                                <p className={(task.complete ? 'line-through ' : '') + 'text-sm font-normal text-slate-600 line-clamp-2 mb-2'}>{task.title}</p>
                                <p className='text-xs font-normal text-slate-400'>{task.showTime}</p>
                            </div>
                            <div onClick={() => removeTask(task.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-sm transition duration-200 ease-in-out hover:scale-125">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default TodoList