import React from 'react'
import {FaChevronDown,FaChevronUp} from "react-icons/fa";
import { useGlobalContext } from './context';

function Submenu({subList}) {
    const {isDropListOpen,toggleArrow}= useGlobalContext();
        
    const DropList =({list})=> {
           return(
        <ul className={isDropListOpen ? 'dropList show' : 'dropList'}>
            {list.subMenu.map((menu,index)=>{
                return (
                    <li className='dropItem'><a href={menu.link}>{menu.name}</a></li>
                    )
            })}
         </ul>
        )
    }

    return (
        <div className="subList">
         <ul >
            {subList.subMenu.map(list=>{
            return(
                <li className="subItem">
                    <a href={list.link}><p>{list.name}</p>
                            {list.subMenu?
                            (isDropListOpen ? <span><FaChevronUp className="arrowIcon" onClick={toggleArrow}/></span>
                            :<span><FaChevronDown className="arrowIcon" onClick={toggleArrow}/></span>)
                            :null}
                    </a> 
                    {list.subMenu ? <DropList list={list}/>: null}  
                </li>
            )
            })}
         </ul>
        </div>
    )
}

export default Submenu


