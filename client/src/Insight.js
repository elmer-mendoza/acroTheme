import React from 'react';
import {FaChevronRight} from "react-icons/fa";
import {insights}  from './data';

const InsightCard =(props)=>{
    const {image,title,link} = props.insight
    return (
        <div className="col">
        <img src={image} alt="" />
        <div className='cardText'>
          <a href={link}>
            <h4>{title}</h4>
             <p> Read article<FaChevronRight className='FaChevronRight'/></p>
            </a>
        </div>
       </div> 
    )
}


function Insight() {
    return (
        <div className="insight">
        <div className="container">
          <h2 className="section_title">Insights from our team</h2>
          <button className='btn insightBtn'><a href="">More articles<i><FaChevronRight className='FaChevronRight'/></i></a></button>
          <div className="card">
              {insights.map((insight)=>{
                  return (
                      <InsightCard insight={insight}/>
                  )
              })}
          </div>
        </div>
      </div>
    )
}

export default Insight


