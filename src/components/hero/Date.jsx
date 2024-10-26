import React, { useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { IoCalendarOutline } from 'react-icons/io5'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


export default function Date() {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
  return (
    <div className='date'>
        <div className="check-in">
            <IoCalendarOutline className='date-icon'/>
            <div className="date-content">
                <label>Check-In</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText='Add Date'
                    dateFormat="MM-dd-yyyy"
                    className='add-date'
                />
                <span>add date</span>
            </div>
        </div>

        <span><BsArrowRight/></span>

        <div className="check-out">
            <IoCalendarOutline className='date-icon'/>
            <div className="date-content">
                <label>Check-Out</label>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText='Add Date'
                    dateFormat="MM-dd-yyyy"
                    className='add-date'
                />
                <span>add date</span>
            </div>
        </div>
    </div>
  )
}
