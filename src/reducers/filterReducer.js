const SET_PRODUCTS = 'SET_PRODUCTS' 
const LOADING = 'LOADING'
const ERROR = 'ERROR'
const SET_VIEW = 'SET_VIEW'
const SET_SORT = 'SET_SORT'
const SET_SORT_VALUE = 'SET_SORT_VALUE'
const SET_FILTER = 'SET_FILTER'
const SET_FILTER_VALUES = 'SET_FILTER_VALUES'
const CLEAR_FILTERS = 'CLEAR_FILTERS'

const filterReducer =(state, action)=>{
    switch(action.type){
        case SET_PRODUCTS:
        let productList = action.payload
        let prices = []
        prices = productList.map(item => item.price)
        const maxPrice = Math.max(...prices)
        return {...state, all_products: action.payload, filtered_products: action.payload, 
        filters: {...state.filters, max_price: maxPrice, price: maxPrice}}
        break;
        case LOADING:
        return {...state, loading: action.payload}
        break;
        case SET_SORT:
        
        const {sort, filtered_products} = state
        let sorted = [...filtered_products]

        if(sort == 'lowest'){
             sorted = sorted.sort((a,b) =>{
                return a.price - b.price
            })
        }
        
        if(sort == 'highest'){
            sorted = sorted.sort((a,b) =>{
                return b.price - a.price
            })
        }
        if(sort == 'a-z'){
            sorted = sorted.sort( (a, b) => a.name.localeCompare(b.name, 'en', {ignorePunctuation: true}));
        }
        if(sort == 'z-a'){
            sorted = sorted.sort( (a, b) => b.name.localeCompare(a.name, 'en', {ignorePunctuation: true}));
        }

        return {...state, filtered_products : sorted}
        break;
        case SET_SORT_VALUE:
        return {...state, sort: action.payload}
        break;
        case SET_VIEW:
        return {...state, view: action.payload}
        break;

        case SET_FILTER_VALUES:
        const name = action.payload.name
        const value = action.payload.value
        return {...state, filters: {...state.filters, [name]: value}}

        case SET_FILTER:
        // import all_products as filtered_items from state
        const {all_products: filtered_items, filters} = state
        let filtered = [...filtered_items]
        const {search, category, company, color, price, shipping} = filters

        if(search){
            filtered = filtered.filter(product => {
                return product.name.toLowerCase().startsWith(search)
            })
        }
        if(category && category !== 'All'){
            filtered = filtered.filter(product => product.category === category)
        }
        if(company && company !== 'All'){
            filtered = filtered.filter(product => product.company === company)
        }
        if(color && color !== 'All'){
            filtered = filtered.filter(product =>{
                if(product.colors.includes(color)){
                    return product
                }
            })
        }
        if(price && price !== 0){
            filtered = filtered.filter(product => product.price <= price )
        }
        if(shipping && shipping !== 'all'){
            filtered = filtered.filter(product => product.shipping == shipping )
        }

        return {...state, filtered_products : filtered}
        break;
        case CLEAR_FILTERS:
        return {...state, filters: {search: '', category: 'All', company: 'All', color: 'All',
        price: state.filters.max_price, max_price: state.filters.max_price, min_price: 0, shipping: 'all'} }
        break; 

        default:
        return state
    }
    return state
}

export default filterReducer