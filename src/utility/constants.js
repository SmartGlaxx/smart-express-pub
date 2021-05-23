import React from 'react';
import { FaHome , FaAddressCard,
FaShoppingBag, FaTruck, FaCcVisa} from 'react-icons/fa'
export const Links = [
    {
        name: " Home",
        link: "/",
        icon: <FaHome />
    },
    {
        name: " About",
        link: "/about",
        icon: <FaAddressCard/>
    },
    {
        name: "Shop",
        link: "/shop",
        icon: <FaShoppingBag/>    
    }
]

export const OurServices =[ 
    {
        name: "Quality Products",
        icon: <FaShoppingBag/>,
        text: 'We offer the best quality in consumer products.'
    },
    {
        name: "Efficient Delivery",
        icon: <FaTruck/>,
        text: "Our delivery services are efficient and reliable.",
    },
    {
        name: "Secure Payment",
        icon: <FaCcVisa/>,
        text: "Our delivery services are efficient and reliable.",
    }
]

export const url = "https://shop-api-live.herokuapp.com/products"