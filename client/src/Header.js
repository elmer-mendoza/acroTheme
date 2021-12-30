import React,{useState,useRef,useEffect} from 'react';
import{navList} from "./data";
import {FaChevronDown,FaChevronUp} from "react-icons/fa";
import { useGlobalContext } from './context';
import Submenu from "./Submenu";


function Header() {
   const {openSubmenu,closeSubmenu,handleScrollTop,isScroll } = useGlobalContext();
    
   const displayMenu=(e)=>{
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom -3;
    if (page) {
        openSubmenu(page, { center, bottom });
    } 
   }

   const handleSubmenu = (e) => {
    if (!e.target.classList.contains("list-link")) {
    // if (!e.target.classList.contains("list-link"||"submenu show"||'submenuContainer')) {
      closeSubmenu();
    }
}
    
useEffect(() => { 
    window.onscroll = () => {
     const scrollTop = window.pageYOffset 
        handleScrollTop(scrollTop);
        closeSubmenu();
           
  }}, []);
   
    return (
        <div className={`${isScroll ? "header headerScroll" : "header "} `}  >
           
                <img className='headerLogo' src={`${isScroll ? "./images/logoCompact.svg" : "./images/logoDefault.svg"} `} alt="logo"/>
                <div className="nav" >
                    <ul className="navList" >

                        {navList.map(list =>{
                            return(
                                <li className='navItem'>
                                   <a href="" className={`${isScroll ? "list-link navScroll "  : "list-link "} `} >
                                        {list.name} 
                                        {list.subMenu?<FaChevronDown id="arrowIcon"/>:null}
                                  </a>
                                  {list.subMenu ? <Submenu list={list}/>: null}
                                </li> 
                            )
                        })}
                    </ul>
                    <a href="">
                        <button id="contactButton">Contact</button>
                    </a>
                </div> 
           
            
        </div>
    )
}

export default Header


//     return (
//         <div className={`${isScroll ? "header headerScroll" : "header "} `}  >
//              <div className="container row" onMouseOver={handleSubmenu}>
//                 <img  src={`${isScroll ? "./images/logoCompact.svg" : "./images/logoDefault.svg"} `} alt="logo"/>
//                 <div className="nav"  >
//                     <div className="navList" >
//                         {navList.map(list =>{
//                             return(
//                                 // <a >
//                                    <button href="" className={`${isScroll ? "list-link navScroll navItem"  : "list-link navItem"} `} onMouseOver={displayMenu}>
//                                         {list.name} 
//                                         {list.subMenu?<FaChevronDown id="arrowIcon"/>:null}
//                                     </button>
//                                 // </a>
//                             )
//                         })}
//                     </div>
//                     <a href="">
//                         <button id="contactButton">Contact</button>
//                     </a>
//                 </div> 
//             </div>
//             <Submenu navlist={navList}/>
//         </div>
//     )
// }

// export default Header
