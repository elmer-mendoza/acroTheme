import React from 'react';
import {expertise} from "./data";

function Expertise() {
    return (
        <div className="expertise container">
            <div className=" row">
                <h2>Our proven process & experts solve problems & deliver solutions.</h2>
            </div>
            <div className='row'>
                {expertise.map(({title,image,desc,link,alt})=>{
                    return(
                    <div className="expertiseRow">
                        <a href={link}>
                            <img src={image} alt={alt} />
                            <h4>{title}</h4>
                            <p>{desc}</p>
                        </a>
                    </div>
                    )
                })}
            </div>
            <div className="row panels">
                <div className="panel pRight">
                   Your partner in digital commerce.
                   {/* <p>Your partner in digital commerce.</p> */}
                </div>
                <div className="panel pLeft">
                    <div>
                       We are a digital commerce agency that integrates into your business. A true ally, building on-demand commerce solutions to match your company's needs.
                    </div>
                    <div>
                        <a href="">
                          <button id="contactButton">Let's talk </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise
