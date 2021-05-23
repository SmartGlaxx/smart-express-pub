import React, {useEffect, useContext} from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext()

export const UserProvider = ({children})=>{
    const { user, isAuthenticated, isLoading } = useAuth0();
    


    return <UserContext.Provider value={{
 user, isAuthenticated, isLoading
    }}>
    {children}   
    </UserContext.Provider>
}

export const useUserContext =()=>{
    return useContext(UserContext)
}