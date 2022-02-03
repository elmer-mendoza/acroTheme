import React from 'react';
import {FaChevronRight} from "react-icons/fa";
import { partners } from './data';

const PartnerImage =(props)=> {
    const {image,link} = props.partner
    return(
        <div className="col">
            <a href={link}>
                <img src={image} alt="" />
            </a>
    </div>
    )
}

function Partners() {
    return (
        <div className="partners">
        <div className="container">
          <h2 className="section_title">Our technology partners</h2>
          <button className='btn'><a href="">All partners<i><FaChevronRight className='FaChevronRight'/></i></a></button>
          <div className='partner'>
              {partners.map(partner => {
                  return (
                      <PartnerImage partner={partner}/>
                  )
              })
              }
          </div>
        </div>
      </div>
    )
}

export default Partners
