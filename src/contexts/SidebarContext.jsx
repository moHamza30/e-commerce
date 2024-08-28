import React, { createContext, useState } from 'react'


export const SidebarContext = createContext()
const SidebarProvider = ({children}) => {
    const [isopen,setisopen] = useState(false)
    const handleClose = ()=>{
        setisopen(!isopen)
    }
  return (
    <div >
        <SidebarContext.Provider value={{isopen, setisopen,handleClose}}>
        {children}
        </SidebarContext.Provider>
        </div>
  )
}

export default SidebarProvider