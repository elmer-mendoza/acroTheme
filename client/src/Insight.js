import React from 'react';
import {FaChevronRight} from "react-icons/fa";

const InsightCard =()=>{
    return (
        <div className="col">
        <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/card/public/2021-03/acro-blog-web-design-and-conversion-points.jpg.webp?itok=e_q4qYvJ%22" alt="" />
        <div className='cardText'>
          <a href="">
            <h4>Must Have Requirements for Your Ecommerce Site</h4>
             <p> Read article<FaChevronRight/></p>
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
          <button className='btn insightBtn'><a href="">More articles<i><FaChevronRight/></i></a></button>
          <div className="card">
              {[...Array(4)].map(()=>{
                  return (
                      <InsightCard/>
                  )
              })}
          </div>
        </div>
      </div>
    )
}

export default Insight


