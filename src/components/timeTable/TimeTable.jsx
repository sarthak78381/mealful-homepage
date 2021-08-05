import React from 'react';
import DayCard from '../dayCard/DayCard';

import './timetable.scss';

function TimeTable() {
    // array of days
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return (
        <div className='timetable__maincontainer aligndiv__center'>
            <div className="aligndiv timetable__container aligndiv__center">
                <div className='card__container aligndiv__center'>
                    {/* looping the days array, to render DayCard components with the day and date(index of element in days array) properties*/}
                    {days.map((day, idx) => <DayCard day={day} date={idx+1} key={idx}/>)}
                </div>
            </div>
        </div>
    )
}

export default TimeTable
