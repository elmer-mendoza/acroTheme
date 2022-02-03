import React from 'react';
import {FaChevronRight} from "react-icons/fa";

function Works() {
    return (
        <div className="works">
        <div className="container">
          <h2 className="section_title">Some of our work</h2>
          <div className='work__container'>
            <div className="work">
                <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/half_screen/public/2021-03/lp-header-2.jpg.webp?itok=_0Okz2G-" alt="" />
                <div className="col workText">
                    <p>CASE STUDY: LIVEPERSON</p>
                    <h3>Streamline operations to capitalize on growth opportunities and scale effectively.</h3>
                    <hr/>
                    <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com//sites/default/files/styles/content_image/public/2021-03/liveperson-logo.png.webp?itok=PxPKjRw0" alt="" />
                    <p>How an open architecture bridged the gap between legacy and new product solutions to create an unparalleled customer experience and address sales objectives.</p>
                    <button className='btn'><a href="">View case study<i><FaChevronRight className='FaChevronRight'/></i></a></button>
                </div>
            </div>
            <div className="work">
                <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com/sites/default/files/styles/half_screen/public/2021-03/lp-header-2.jpg.webp?itok=_0Okz2G-" alt="" />
                <div className="col workText">
                    <p>CASE STUDY: LIVEPERSON</p>
                    <h3>Streamline operations to capitalize on growth opportunities and scale effectively.</h3>
                    <hr/>
                    <img src="https://nginx.production.acro-media-corp-site-backend.lagoon-prd.acromedia.com//sites/default/files/styles/content_image/public/2021-03/liveperson-logo.png.webp?itok=PxPKjRw0" alt="" />
                    <p>How an open architecture bridged the gap between legacy and new product solutions to create an unparalleled customer experience and address sales objectives.</p>
                    <button className='btn'><a href="">View case study<i><FaChevronRight className='FaChevronRight'/></i></a></button>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Works
