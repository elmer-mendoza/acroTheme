import React, { useState, useContext } from 'react';
import {navList} from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isDropListOpen, setIsDropListOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    
  const toggleArrow =(e)=>{
    e.preventDefault();
    setIsDropListOpen(!isDropListOpen);
  };
  const toggleHamburger =(e)=>{
    e.preventDefault();
    setSidebarOpen(!sidebarOpen);
  };

  const handleScrollTop =(scrollTop) => {
    scrollTop >= 50 ? setIsScroll(true) : setIsScroll(false)
  }
    

  return (
    <AppContext.Provider
      value={{
        isDropListOpen,
        toggleArrow,
        handleScrollTop,
        isScroll,
        toggleHamburger,
        sidebarOpen
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