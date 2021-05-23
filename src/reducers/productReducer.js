const SET_LOADING = 'SET_LOADING';
const ERROR_FETCHING_PRODUCT = 'ERROR_FETCHING_PRODUCT';
const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED';

const reducer =(state, action)=>{
    switch (action.type) {
        case SET_LOADING:
        return {...state, loading: action.payload}
        break;
        case ERROR_FETCHING_PRODUCT:
        return {...state, error: true}
        break;    
        case PRODUCTS_FETCHED:
        return {...state, all_products: action.payload}
        break;      

        default:
            break;
    }

    return state
} 

export default reducer