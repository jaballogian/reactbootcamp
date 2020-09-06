import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import ProductDetail from './ProductDetail'

function App(){
    return(
        <div>
            <nav>
                <Link to="/">Go to home page</Link>
                <br/>
                <Link to="/products">Go to product page</Link>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/products">
                    <Products/>
                </Route>

                <Route path="/products/:productId">
                    <ProductDetail/>
                </Route>
            </Switch>
        </div>
    )
}

export default App