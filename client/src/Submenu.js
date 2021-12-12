import React,{useEffect,useRef} from 'react'
import { useGlobalContext } from './context';

function Submenu() {
    const container = useRef(null)
    const {page,location,isSubmenuOpen}= useGlobalContext();
    
    useEffect(() => {
        const submenu = container.current
        const { center, bottom } = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
         
    }, [page, location]);

    console.log(page)
    return (
        <div>
             <aside
                    className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
                    ref={container}
                    >
                    <section>
                        <h4>{page.name}</h4>
                        <div >
                        {page.subMenu.map(menu=>{
                            return(
                                <ul>
                                    <li><a>{menu.name}</a></li>  
                                </ul>
                            )
                        })}
                            
                        
                        </div>
                    </section>
            </aside> 
        </div>
    )
}

export default Submenu


