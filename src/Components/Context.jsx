import React, { createContext } from "react";
import {useParams} from "react-router-dom"


export const ParamsContext = createContext();

export const ParamsProvider = ( {children} ) => {

    const {location = "Delhi"} = useParams();


return (
    <ParamsContext.Provider value={{location}}> 
       {children}
    </ParamsContext.Provider>
)
}