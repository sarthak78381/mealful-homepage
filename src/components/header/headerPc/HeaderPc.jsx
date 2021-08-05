import React, { useState } from 'react';
import './header-pc.scss';


function HeaderPc() {
    const [clicked, isClicked] = useState(false);
    return (
        <nav>
            <div className="aligndiv aligndiv__center nav-container">
                <div className="activeNav">
                    <img src="https://www.mealful.ca/img/mealful-22.svg" alt="" />
                </div>
                <div className="aligndiv__center unActiveNav">
                    <div className="webNavLinks">
                        <h4 className='unActiveLink unActiveHover'>Buy Meal Plans</h4>
                        <h4 className='unActiveLink unActiveHover active'>Schedule Meals</h4>
                        <h4 className='unActiveLink unActiveHover'>Upcoming</h4>
                        <h4 className='unActiveLink unActiveHover' onClick={() => isClicked(!clicked)}><i className="far fa-user"></i> Hello, Intern <i className="fas fa-caret-down"></i></h4>
                    </div>
                </div>
            </div>
            <div className={`dropbox ${clicked ? "":"hidden"}`}>
                <p>Profile</p>
                <p>OrderHistory</p>
                <p>Get Free Meals</p>
                <p>FAQ's</p>
                <p>Logout</p>
            </div>
        </nav>
    )
}

export default HeaderPc;
