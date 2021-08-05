import React from 'react';

import './contact.scss';

function Contact() {
    return (
        <div className='aligndiv contact__container'>
            <div className="aligndiv__center contact">
                <div className="grid__div">
                    <div className="item logo">
                        <img src="https://www.mealful.ca/img/mealful-22.svg" alt="" />
                    </div>
                    <div className="item know__us">
                        <div className="heading">
                            <h4>Get to Know Us</h4>
                        </div>
                        <div className="questions">
                            <p>Why choose us?</p>
                            <p>FAQ's?</p>
                        </div>
                    </div>
                    <div className="item help__you">
                        <div className="heading">
                            <h4>Let us help you</h4>
                        </div>
                        <div className="questions">
                            <p>Account Details</p>
                            <p>Order History</p>
                            <p>Contact Us</p>
                            <p>Help</p>
                        </div>
                    </div>
                    <div className="item bussiness">
                        <div className="heading">
                            <h4>Let's Do Business</h4>
                        </div>
                        <div className="questions">
                            <p>Cook with us</p>
                            <p>Become a hub partner</p>
                            <p>General inquiries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
