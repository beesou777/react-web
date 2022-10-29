import React from 'react'
import img from './img/hero.png'
import './quality.css'
const Quality = () => {
    return (
        <>
            <div className="cat">
                <div className="dog">
                    <h2>QUALITY WORK</h2>
                    <h1>Designed & Developed by <span id='cat'>Professionals.</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="img">
                    <img src={img} alt="" className='ele' />
                </div>
            </div>
        </>
    )
}

export default Quality