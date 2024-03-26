import React, { useState } from 'react'
import TodoContext from '../context/TodoContext'
import ShowTodos from './ShowTodos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddTodos from './AddTodos'

const Home = () => {

    const [tasks, setTasks] = useState([])

    return (
        <>
            <TodoContext.Provider value={[tasks, setTasks]}>
                <div className="container max-w-md mx-auto rounded-lg shadow-md font-nunito">
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<ShowTodos/>} />
                            <Route path="/add" element={<AddTodos/>} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </TodoContext.Provider>
        </>
    )
}

export default Home