import React from 'react';

import './menucard.scss';

function MenuCard({item}) {
    // getting menu each item object, with details to render on screen
    const {name, chefName, spec, desc, imgUrl} = item;
    return (
        <div className='menu__cardcontainer'>
            <div className="menu__card">
                <img src={imgUrl} alt="" />
                <div className="item menu__cardcontent">
                    <div className="card__name">
                        <h4>{name}</h4>
                    </div>
                    <div className="card__chefname">
                        <h5><span>by</span> {chefName}</h5>
                    </div>
                    <div className="card__spec">
                        {/* looping spec array */}
                        {spec.map((e, idx) => <div key={idx}><p className={e.color}>{e.name}</p></div>)}
                    </div>
                    <div className="card__description">
                        <p>{desc}</p>
                    </div>
                    <div className="card__button">
                        <button>Schedule Meal</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard
