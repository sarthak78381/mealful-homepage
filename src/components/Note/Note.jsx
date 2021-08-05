import React from 'react'

import './Note.scss';

function Note() {
    return (
        <div className='note__container aligndiv__center'>
            <div className="aligndiv note__messageContainer">
                <p><span>Note: </span>Slot time for lunch is from 12:30pm to 3:00pm and slot time for dinner is from 6:00pm to 8:30pm. You can schedule or modify your orders 4 hours prior to the slot time.</p>
            </div>
        </div>
    )
}

export default Note
