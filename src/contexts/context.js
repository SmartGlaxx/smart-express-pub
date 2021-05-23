import React, {useEffect, useReducer} from 'react';
import {reducer} from '../reducers/reducer'

const AppContext = React.createContext()
const SHOW_MENU = 'SHOW_MENU';
const HIDE_MENU = 'HIDE_MENU';
const TOGGLE_THEME = 'TOGGLE_THEME';

const getThemeValue = ()=>{
    if(localStorage.getItem('smart-express-theme')){
        const themeStoredValue = JSON.parse(localStorage.getItem('smart-express-theme'))
        return themeStoredValue
    }else{
        return 'light'
    }
}

const initialState ={
    showMenuBar: false,
    showOverlay: false,
    theme: getThemeValue()
}

export const AppProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const showMenu =()=>{
        dispatch({type: SHOW_MENU})
    }
    const hideMenu =()=>{
        dispatch({type: HIDE_MENU})
    }

    const toggleTheme = ()=>{
        let themeValue = ''
        if(state.theme === 'light') {
            themeValue= 'dark'
        }else{
            themeValue= 'light'
        }

        localStorage.setItem('smart-express-theme', JSON.stringify(themeValue))
        dispatch({type: TOGGLE_THEME, payload: themeValue})
    }

useEffect(()=>{
    document.documentElement.className=state.theme
},[state])


    return <AppContext.Provider value={{
...state, showMenu, hideMenu, toggleTheme
    }}>
    {children}
    </AppContext.Provider>
}

export const useAppContext=()=>{
    return React.useContext(AppContext)
}
 