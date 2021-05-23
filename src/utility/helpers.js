export const NumberFormat =(number)=>{
    return new Intl.NumberFormat('en-US').format(number/100) 
    
}

export const ItemsProperties =(name,value)=>{
    if(name == 'category'){
        const categoryNames = value.map(item => item.category)
        return new Set(categoryNames)
    }
    if(name == 'company'){
        const companyNames = value.map(item => item.company)
        return new Set(companyNames)
    }
    if(name == 'colors'){
        const colorsNames = value.map(item => item.colors)
        const flatColors = colorsNames.flat()
        return new Set(flatColors)
        
    }
    if(name == 'prices'){
        const priceList = value.map(item => item.price)
        return new Set(priceList)
    }
    if(name == 'shipping'){
        const shippingList = value.filter(item => item.shipping == 'true')
        return shippingList
    }
}