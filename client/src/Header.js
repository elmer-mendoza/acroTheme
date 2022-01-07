import React,{useEffect} from 'react';
import{navList} from "./data";
import {FaChevronDown,FaChevronUp} from "react-icons/fa";
import { useGlobalContext } from './context';
import Submenu from "./Submenu";


function Header() {
    const {handleScrollTop,isScroll,toggleHamburger,sidebarOpen } = useGlobalContext();

    useEffect(() => { 
        window.onscroll = () => {
        const scrollTop = window.pageYOffset 
            handleScrollTop(scrollTop);
       }}, []);
   
    return (
        <div className={`${isScroll ? "header headerScroll" : "header "} `}  >
           <img className='headerLogoLrg' src={`${isScroll ? "./images/logoCompact.svg" : "./images/logoDefault.svg"} `} alt="logo"/>
           <img className='headerLogoMd' src={"./images/logoCompact.svg" } alt="logo"/>
             <nav className={`${sidebarOpen ? "nav sideNav ":"nav sideNav hide"}`}  >
               <ul className="navList" >
                     {navList.map(list =>{
                        return(
                            <li className='navItem'>
                                <a href="" >
                                    <p className={`${isScroll ? " txtColor navScroll "  : "txtColor"} `}>{list.name}<span>{list.subMenu?<FaChevronDown className="arrowIcon primary" size={'15'}/>:null}</span></p>
                                </a>
                                {list.subMenu ? <Submenu subList={list}/>: null}
                            </li> 
                        )
                    })}
                    <li className='navBtn'>
                      <a href="">Contact</a>
                    </li>
                </ul>
            </nav> 
            <div className={`${sidebarOpen? "hamburger closeMenu":"hamburger"}`} onClick={toggleHamburger}>
              <div className="hamburger-inner"  />
            </div>
        </div>
    )
}

export default Header

