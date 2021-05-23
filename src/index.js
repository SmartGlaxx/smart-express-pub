import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppProvider} from './contexts/context'
import {ProductProvider} from './contexts/productContext'
import {FilterProvider} from './contexts/filterContext'
import {CartProvider} from './contexts/cartContext'
import { Auth0Provider } from "@auth0/auth0-react";
import {UserProvider} from './contexts/userContext'

ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_CLIENT_ID}
    redirectUri={window.location.origin}
    realm = "email"
    username = 'USER_EMAIL'
    cacheLocation = "localstorage"
  >
  <UserProvider>
    <ProductProvider>
    <FilterProvider>
      <CartProvider >
        <AppProvider>
        <App />
        </AppProvider>
        </CartProvider>
      </FilterProvider>
    </ProductProvider>
  </UserProvider>
   </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
