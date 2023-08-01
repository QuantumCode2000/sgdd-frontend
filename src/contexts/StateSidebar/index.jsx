import { createContext,useContext,useState } from "react";

const StateSidebarContext = createContext();

const StateSidebarProvider = ({children}) => {
    const [active,setActive] = useState(true);


    const data = {
        active,
        setActive
    }
    return (
        <StateSidebarContext.Provider value={data}>
            {children}
        </StateSidebarContext.Provider>
    )
}

export {StateSidebarProvider};
export default StateSidebarContext;