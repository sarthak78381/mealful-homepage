import React from 'react';
import './header-mobile.scss';


function HeaderMobile({hamClicked, isHamClicked, isClicked}) {
    return (
        <div className="navBar">
            <div className="aligndiv navFixed">
                <div className="aligndiv__center nav-container">
                    <div className="activeNav">
                        <img src="https://www.mealful.ca/img/mealful-22.svg" alt="" />
                    </div>
                    <div className="hamburger aligndiv__center" onClick={() => {
                        // closing/opening the nav menu
                        isHamClicked(!hamClicked);
                        // closing dropdown menu, if left open by user
                        isClicked(false);
                    }}>
                        <div className={`${hamClicked ? 'checked':null} aligndiv__center`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile;
