import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import TodoList from './TodoList';
import DateSection from './DateSection';

const ShowTodos = () => {

    const [tasks] = useContext(TodoContext)

    return (
        <>
            <DateSection showAdd={true}/>
            <div className="h-screen overflow-auto ">
            {tasks.length > 0 ?        
                            <TodoList/> :
                            <>
                <p className='mx-auto my-auto max-w-md text-center'>No Items</p>
            </>
            }
            </div> 
        </>
    )
}

export default ShowTodos