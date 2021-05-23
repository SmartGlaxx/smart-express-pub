import React, {useEffect, useReducer, useContext} from 'react'
import {url} from '../utility/constants'
import reducer from '../reducers/productReducer'

const ProductContext = React.createContext()
const SET_LOADING  = 'SET_LOADING';
const ERROR_FETCHING_PRODUCT = 'ERROR_FETCHING_PRODUCT';
const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED';


const initialState = {
    loading : false,
    error: false,
    all_products : []
}
export const ProductProvider = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);
    // const [products, setProducts] = useState([])

    const fetchProducts= async(url)=>{
        dispatch({type: SET_LOADING, payload: true})
         try{
            const response = await fetch(url)
            const data = await response.json();

            if(data.products.length > 0){
                 const {products} = data
                 dispatch({type: PRODUCTS_FETCHED, payload: products})
                 dispatch({type: SET_LOADING, payload: false})
            }else{
                dispatch({type: ERROR_FETCHING_PRODUCT})
                dispatch({type: SET_LOADING, payload: false})
            }
        }catch(error){
            console.log(error)
            dispatch({type: SET_LOADING, payload: false})
        }
    }

useEffect(()=>{
    fetchProducts(url)
},[])

// useEffect(()=>{
//     const productList= state.all_products;
//     if(productList.length > 0){
//         dispatch({type: 'SET_FETCHED_PRODUCTS'})
        
//     }
    
// },[state.all_products])
 

    return <ProductContext.Provider value={{
...state
    }}>
    {children}
    </ProductContext.Provider>
}



export const useProductContext =()=>{
    return useContext(ProductContext)
}