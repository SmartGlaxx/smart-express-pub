const SHOW_MENU = 'SHOW_MENU';
const HIDE_MENU = 'HIDE_MENU';
const TOGGLE_THEME = 'TOGGLE_THEME';

export const reducer = (state, action)=>{
    switch(action.type){
        case SHOW_MENU:
        return {...state, showMenuBar: true, showOverlay: true}
        break;
        case HIDE_MENU:
        return {...state, showMenuBar: false, showOverlay: false}
        break;
        case TOGGLE_THEME:
        return {...state, theme: action.payload}
        break;

    }
    return state
}