import React from 'react'
import './contact.css'
import img from './img/bt.svg'
const Contact = () => {
  return (
    <>
     <div className="asd">
     <div id="contact">
        <div className="hawa">
          <div className="links">
            <h1 className='head'>MAIN</h1>
            <a href="#" className='lee'>Blog</a>
            <a href="#" className='lee'>FAQS</a>
            <a href="#" className='lee'>Supports</a>
            <a href="#" className='lee'>About Us</a>
          </div>
          <div className="links">
            <h1 className='head'>PORDUCT</h1>

            <a href="#" className='lee'>Log in</a>
            <a href="#" className='lee'>Personal</a>
            <a href="#" className='lee'>Business</a>
            <a href="#" className='lee'>Team</a>

          </div>
          <div className="links">
            <h1 className='head'>PRESS</h1>

            <a href="#" className='lee'>Logos</a>
            <a href="#" className='lee'>Events</a>
            <a href="#" className='lee'>Stories</a>
            <a href="#" className='lee'>Office</a>

          </div>
          <div className="links">
            <h1 className='head'>TEAM</h1>

            <a href="#" className='lee'>Career</a>
            <a href="#" className='lee'>FOunders</a>
            <a href="#" className='lee'>Culture</a>
            <a href="#" className='lee'>Onboarding</a>

          </div>
          
        </div>
        <div className="other">
            <div className="logo">
              <img src={img} alt="image" /> <span className="tex">Treact Inc.</span>
            </div>
            <p id='ooo'>© 2018 Treact Inc. All Rights Reserved.</p>
          </div>
          
      </div>
     </div>
    </>
  )
}

export default Contact