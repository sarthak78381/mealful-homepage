import React from 'react'
import MenuCard from '../menuCard/MenuCard';
import menu from './menulist';


import './menu.scss';
function Menu() {
    return (
        <div className='menu__maincontainer aligndiv__center'>
            <div className="aligndiv menu__container">
                <div className="aligndiv__center menu__optioncontainer">
                    <div className="item">
                        <p>Lunch Menu</p>
                    </div>
                    <div className="item">
                        <button className='active'>Lunch</button>
                        <button>Dinner</button>
                    </div>
                </div>
                <div className="menucard__container">
                    {menu.map((item, idx) => <MenuCard key={idx} item = {item}/>)}
                </div>
                <div className="request">
                    <button>Request Menu Items</button>
                </div>
            </div>
        </div>
    )
}

export default Menu
