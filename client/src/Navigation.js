import React,{useState,useRef,useEffect} from 'react';
import{navList} from "./data";
import {FaChevronDown,FaChevronUp} from "react-icons/fa";
import { useGlobalContext } from './context';
import Submenu from "./Submenu";

function Navigation() {
   const {openSubmenu,closeSubmenu } = useGlobalContext();
   const[ imageLogo, setImageLogo]= useState("./images/logoDefault.svg")
   
   const displayMenu=(e)=>{
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 3;
    if (page) {
        openSubmenu(page, { center, bottom });
    } 
   }

   const handleSubmenu = (e) => {
    if (!e.target.classList.contains('list-link'|| 'submenu')) {
      closeSubmenu();
    }
}
 
    
useEffect(() => { 
    window.onscroll = () => {
    const logo = 
    (window.pageYOffset >= 50  ?
        "./images/logoCompact.svg" :
        "./images/logoDefault.svg");
        setImageLogo(logo);
        console.log(logo);
           
  }}, [imageLogo]);
    
    
        
    return (
        <div className="header" >
            <div className="row" >
            <img src={imageLogo} alt="logo"/>
                <div className=" nav"  onMouseOver={handleSubmenu}>
                    {navList.map(list =>{
                        return(
                        <ul>
                            <li> 
                                {/* <div > */}
                                    <a className="list-link" href="" onMouseOver={displayMenu}>
                                        {list.name}
                                        <i className="icon">{list.subMenu?<FaChevronDown/>:null}</i>
                                    </a>
                                {/* </div> */}
                            </li>
                        </ul>    
                        )

                    })}
                <button><h2>Contact</h2></button>
                </div> 
            </div>
            <Submenu navlist={navList}/>
        </div>
    )
}

export default Navigation
