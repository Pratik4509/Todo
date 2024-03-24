import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import TodoList from './TodoList';
import DateSection from './DateSection';

const ShowTodos = () => {

    const [tasks] = useContext(TodoContext)

    return (
        <>
            <DateSection showAdd={true} />
            <div className="h-screen overflow-auto ">
                {tasks.length > 0 ?
                    <TodoList /> :
                    <>
                        <p className='mx-auto my-auto max-w-md text-center text-slate-200'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" x="0px" y="0px" className='w-32 h-32 text-center mx-auto mt-64 fill-slate-200'>
                                <g data-name="Layer 2"><circle cx="17.9951" cy="17.9951" r="1.0049" /><path d="M19.5547,14.168a1,1,0,0,0-1.1094,1.6641l3,2a1,1,0,1,0,1.1094-1.6641Z" /><circle cx="14.0049" cy="17.9951" r="1.0049" /><path d="M13.832,14.4453a.9989.9989,0,0,0-1.3867-.2773l-3,2a1,1,0,1,0,1.1094,1.6641l3-2A.9993.9993,0,0,0,13.832,14.4453Z" /><path d="M6,30H26a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H19a3,3,0,0,0-6,0H6A1,1,0,0,0,5,6V29A1,1,0,0,0,6,30ZM14,7a1,1,0,0,0,1-1V5a1,1,0,0,1,2,0V6a1,1,0,0,0,1,1h3V9H11V7ZM7,7H9v3a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V7h2V28H7Z" /><path d="M20.124,22.0078l-8-1a1,1,0,0,0-.248,1.9844l8,1A.9875.9875,0,0,0,20.001,24a1,1,0,0,0,.123-1.9922Z" /></g>
                            </svg>
                            No Tasks
                        </p>
                    </>
                }
            </div>
        </>
    )
}

export default ShowTodos