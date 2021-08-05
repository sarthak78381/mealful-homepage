import React from 'react';
import DayCard from '../dayCard/DayCard';

import './timetable.scss';

function TimeTable() {
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return (
        <div className='timetable__maincontainer aligndiv__center'>
            <div className="aligndiv timetable__container aligndiv__center">
                <div className='card__container aligndiv__center'>
                    {days.map((day, idx) => <DayCard day={day} date={idx+1} key={idx}/>)}
                </div>
            </div>
        </div>
    )
}

export default TimeTable
