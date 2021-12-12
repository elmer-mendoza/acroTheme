import React, { useState, useContext } from 'react';
import {navList} from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({ name:'',link:'',subMenu:[]});
    const [location, setLocation] = useState({});
    
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
    

  return (
    <AppContext.Provider
      value={{
        openSubmenu,
        closeSubmenu,
        isSubmenuOpen, 
        location,
        page
       
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