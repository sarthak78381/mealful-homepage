import React from 'react';
import './daycard.scss';

function DayCard({day, date}) {
    return (
        <div className={`card ${date === 2 ? "activeBg":""}`}>
            <div className="item day__container">
                <p>{day}</p>
            </div>
            <div className="item date__container">
                <p>0{date}</p>
            </div>
        </div>
    )
}

export default DayCard
