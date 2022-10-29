import React from 'react'
import data from './FeatureApi'
import './feature.css'
const Feature = () => {
    return (
        <>
            <div className="fish">
                <h2>feature</h2>
                <h1>We have Amazing <span>Service.</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>

                {data.map((curELe, index) => {
                    return (
                        <>
                            <div className="bus" key={index}>
                                <div className='circle'>
                                <img src={curELe.logo} alt="img" id='ball' /></div>
                               <div className="apple">
                               <div className="title">{curELe.title}</div>
                                <div className="info">{curELe.description}</div>
                               </div>
                            </div>
                        </>
                    )

                })}
            </div>
        </>
    )
}


export default Feature