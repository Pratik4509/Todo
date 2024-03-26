import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DateSection = ({ showAdd }) => {
    const [date, setDate] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        const newDate = new Date()
        setDate(newDate.getDate())
        setDay(newDate.getDay())
        setMonth(newDate.getMonth())
    }, [])

    return (
        <div className=' bg-slate-100 text-purple-600 p-6 flex justify-between items-center sticky top-0 z-10'>
            <div className='text-lg'>
                <p className='font-semibold'>{weekday[day]}, <span className='font-normal'>{date}</span></p>
                <p className='text-sm font-normal text-slate-400'>{months[month]}</p>
            </div>
            <div>
                {showAdd ?
                    <Link to='/add'>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition duration-200 ease-in-out hover:scale-125">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 transition duration-200 ease-in-out hover:scale-110 active:scale-90">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                        </svg>
                    </Link> :
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 transition duration-200 ease-in-out hover:scale-125">
                            <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>
                    </Link>

                }
                {/* <p className='text-sm font-normal text-slate-400'>{tasks.length} Tasks</p> */}
            </div>
        </div>
    )
}

export default DateSection