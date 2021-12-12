import React,{useState,useRef} from 'react';
import{navList} from "./data";
import {FaChevronDown,FaChevronUp} from "react-icons/fa"
import { useGlobalContext } from './context';
import Submenu from "./Submenu";

function Navigation() {
   const {openSubmenu,closeSubmenu } = useGlobalContext();
   const displayMenu=(e)=>{
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 5;
    if (page) {
        openSubmenu(page, { center, bottom });
    } 
   }

   const handleSubmenu = (e) => {
    if (!e.target.classList.contains('list-link')) {
      closeSubmenu();
    }
}
    return (
        <div className="header row" onMouseOver={handleSubmenu}>
            <img src="./images/logoDefault.svg" alt="logo"/>
            <div className=" nav"  >
                {navList.map(list =>{
                    return(
                    <ul>
                        <li className="list-link" onMouseOver={displayMenu}>{list.name}<i className="icon">{list.subMenu?<FaChevronDown/>:null}</i></li>
                    </ul>    
                    )

                })}
            </div>
            <Submenu navlist={navList}/>
        </div>
    )
}

export default Navigation
