import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Home, About, ProductsPage, ErrorPage, SingleProduct, Cart, AuthWrapper} from './pages'
import {Header, Footer} from './components'

function App() {
  return (
    <AuthWrapper>
    <Router>
    <Header />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/shop' exact>
          <ProductsPage />
        </Route>
        <Route path='/shop/:id' exact>
          <SingleProduct />
        </Route>
        <Route path='/cart' exact>
          <Cart />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </AuthWrapper>
  );
}

export default App;
