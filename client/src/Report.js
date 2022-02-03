import React from 'react';
import {FaChevronRight} from "react-icons/fa";

function Report() {
    return (
        <div className="report">
        <div className="container">
          <div className="col">
            <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com//sites/default/files/styles/content_image/public/2021-10/eight-trends-retail-b2c-book.png.webp?itok=Mta0R9ce" alt="" />
          </div>
          <div className="col">
            <h2>Ecommerce trends for retail & B2C.</h2>
            <p>Find out how your online business stacks up against the leaders.</p>
            <button className='btn'><a href="">Read the report now<i><FaChevronRight className='FaChevronRight'/></i></a></button>
          </div>
        </div>
      </div>
    )
}

export default Report
