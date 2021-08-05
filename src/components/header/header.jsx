import React, {useState} from 'react';
import HeaderPc from './headerPc/HeaderPc';

import HeaderMobile from './headerMobile/HeaderMobile';
import './headerMobile/header-mobile.scss';


function Header() {

    const [hamClicked, isHamClicked] = useState(false);

    const [size, changeSize] = useState(window.innerWidth);

    const [clicked, isClicked] = useState(false);

    window.addEventListener('resize', () => {
        changeSize(window.innerWidth);
    })

    return size > 1000 ? (<HeaderPc/>) : (
        <div>
            {/* mobile device responsive navbar */}
            <HeaderMobile isHamClicked ={isHamClicked} hamClicked={hamClicked} isClicked={isClicked}/>
            {/* full screen menu page, Appears, once user clicks hamicon */}
            <div className={`menu ${hamClicked ? "showMenu":""} aligndiv__center`}>
                <div className='aligndiv__center'>
                    <div className='aligndiv__center'>
                        <ul>
                            <li><a href="#home" onClick={() => {isHamClicked(!hamClicked)}}>Buy Meal Plans</a></li>
                            <li><a href="#home" onClick={() => {isHamClicked(!hamClicked)}} className='active'>Schedule Meals</a></li>
                            <li><a href="#home" onClick={() => {isHamClicked(!hamClicked)}}>Upcoming</a></li>
                            <li><a href="#home" onClick={() => {isClicked(!clicked)}}><i className="far fa-user"></i> Hello, Intern <i className="fas fa-caret-down"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* dropdown menu for mobile */}
            <div className={`dropbox_mobile ${(clicked && hamClicked) ? "":"hidden_mobile"}`}> 
                <p>Profile</p>
                <p>OrderHistory</p>
                <p>Get Free Meals</p>
                <p>FAQ's</p>
                <p>Logout</p>
            </div>
        </div>
    )
}

export default Header
