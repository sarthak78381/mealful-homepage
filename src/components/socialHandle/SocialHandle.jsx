import React from 'react';

import './socialhandle.scss';

function SocialHandle() {
    return (
        <div className='aligndiv aligndiv__center handle__container'>
            <div className="icons aligndiv__center">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-twitter"></i>
            </div>
            <div className="copyright">
                <p>©2021 Mealful Inc.</p>
            </div>
            <div className="policy">
                <a href="#terms">Terms Of Service</a>
                <a href="#terms">Privacy Policy</a>
            </div>
        </div>
    )
}

export default SocialHandle
