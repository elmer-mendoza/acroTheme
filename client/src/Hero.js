import React from 'react';
import Header from './Header';

function Hero() {
   
    return (
        <div className="hero">
            <Header/>
            <div className="container">
                <div className="hero__title">
                    <p>acro media</p>
                    <h1>Solving your complex ecommerce needs using design & technology.</h1>
                    <ul className="hero__btnList">
                        <li><a href="">Consulting</a></li>
                        <li><a href="">Development</a></li>
                        <li><a href="">Digital Transformation</a></li>
                        <li><a href="">Digital Commerce</a></li>
                        <li><a href="">React</a></li>
                        <li><a href="">Headless</a></li>
                    </ul>
                 </div>
            </div>
        </div>
    )
}

export default Hero
