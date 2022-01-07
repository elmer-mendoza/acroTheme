import React from 'react';
import {expertise} from "./data";
import {FaChevronRight} from "react-icons/fa";

function Expertise() {
    return (
        <div className="expertise ">
            <div className="container">
                <h2 className="section_title ">Our proven process & experts solve problems & deliver solutions.</h2>
                <div className='expertiseCol'>
                    {expertise.map(({title,image,desc,link,alt})=>{
                        return(
                        <div className="col ">
                            <a href={link}>
                                <img src={image} alt={alt} />
                                <h4>{title}</h4>
                                <p>{desc}</p>
                            </a>
                        </div>
                        )
                    })}
                </div>
            </div>
            <div className="expert">
                <div className="col col1">
                    <p >Your partner in digital commerce.</p>
                </div>
                <div className="col col2">
                    <p>We are a digital commerce agency that integrates into your business. A true ally, building on-demand commerce solutions to match your company's needs.</p>
                    <button className='btn'><a href="">Let's talk<i><FaChevronRight/></i></a></button>
                </div>
            </div>
        </div>
    )
}



export default Expertise
