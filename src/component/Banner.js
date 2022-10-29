import React from 'react'
import img from './img/a.svg'
import './Banner.css'
import img2 from './img/bb.png'
const Banner = () => {
  return (
    <>
    <div className="cont">
    <div className="first">
    <h1>Beautiful React   Templates<span> for you.</span> </h1>
    <p>Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.</p>
   <label > 
   <input type="text"  placeholder=" Your E-mail Address"/>
    <button>get started</button>
   </label>
    <img src={img2} alt="img" id='hah'/>
    </div>
    <div className="second">
        <img src={img} alt="hah" id='haha'/>
    </div>
    </div>
    </>
  )
}

export default Banner