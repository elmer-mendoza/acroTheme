import React from 'react';
import Header from './Header';

function Hero() {
   
    return (
        <div className="hero">
            <Header/>
            <div className="container">
                <div className="heroTitle">
                    <p>acro media</p>
                    <h1>Solving your complex ecommerce needs using design & technology.</h1>
                    <div className="heroButtonContainer">
                        <button><a href=""><p>Consulting</p></a></button>
                        <button><a href=""><p>Development</p></a></button>
                        <button><a href=""><p>Digital Transformation</p></a></button>
                        <button><a href=""><p>Digital Commerce</p></a></button>
                        <button><a href=""><p>React</p></a></button>
                        <button><a href=""><p>Headless</p></a></button>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Hero
