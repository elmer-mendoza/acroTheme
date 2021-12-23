import React, { useState, useContext } from 'react';
import {navList} from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isSubSubmenuOpen, setIsSubSubmenuOpen] = useState(false);
    const [page, setPage] = useState({ name:'',link:'',subMenu:[]});
    const [location, setLocation] = useState({});
    const [isScroll, setIsScroll] = useState(false)
    // const [toggle, setToggle] = useState(false);
    
    const openSubmenu =(text,coordinates) =>{
        const page = navList.find((list) => list.name === text);
        if (page.subMenu) {
            setLocation(coordinates);
            setPage(page);
            setIsSubmenuOpen(true)
       } 
    } 
    const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  const toggle =(e)=>{
    e.preventDefault();
    setIsSubSubmenuOpen(!isSubSubmenuOpen);
  };
 
  const handleScrollTop =(scrollTop) => {
   
    scrollTop >= 50 ? setIsScroll(true) : setIsScroll(false)
  }
    

  return (
    <AppContext.Provider
      value={{
        openSubmenu,
        closeSubmenu,
        isSubmenuOpen, 
        isSubSubmenuOpen,
        location,
        page,
        toggle,
        handleScrollTop,
        isScroll
       
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };