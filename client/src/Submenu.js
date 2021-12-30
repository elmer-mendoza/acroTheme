import React,{useEffect,useRef} from 'react'
import {FaChevronDown,FaChevronUp} from "react-icons/fa";
import { useGlobalContext } from './context';

function Submenu({list}) {
    const container = useRef(null)
    const {page,location,isSubmenuOpen,isSubSubmenuOpen,toggle,closeSubmenu}= useGlobalContext();
        
    const Subpage =({menu})=> menu.subMenu.map((menu,index)=>{
        return(
        <div className={isSubSubmenuOpen ? 'subSubMenu show' : 'subSubMenu'}>
            <ul>
                <li>
                    <a href={menu.link}>{menu.name}</a> 
                </li>
            </ul>
        </div>
        )
    })
        
 
    // useEffect(() => {
    //     const submenu = container.current
    //     const { center, bottom } = location
    //     submenu.style.left = `${center}px`
    //     submenu.style.top = `${bottom}px`
         
    // }, [page, location]);
    
    return (
        <div className="subList">
                           {list.subMenu.map(menu=>{
                            return(
                                    <ul className='submenuContainer'>
                                        <li>
                                            <div className=" subcategory row">

                                                <div className='listName'>                                              
                                                    <a href={menu.link}>{menu.name}</a> 
                                                </div>
                                                <div>
                                                    <a className="subArrowIcon" href="">
                                                        {menu.subMenu?
                                                        (isSubSubmenuOpen ? <FaChevronUp onClick={toggle}/>:<FaChevronDown onClick={toggle}/>)
                                                        :null}
                                                    </a>
                                                </div>
                                                </div>
                                            <div>
                                              {menu.subMenu ? <Subpage menu={menu}/>: null}  
                                            </div>
                                       </li>
                                     </ul>
                            )
                           
                         })}
        </div>
    )
}

export default Submenu


