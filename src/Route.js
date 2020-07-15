import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
// import Product from './Component/Items';
import Product from './Component/Product';
import ProductItem from './Component/ProductItem';
import NotFound from './Component/NotFound';
import NavBar from './Component/NavBar';



function RouteConfig() {
    return (
        <div>
            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />;
                    <Route path="/about" component={About} />;
                    <Route exact path="/product" component={Product} />;
                    <Route path="/product/:id" component={ProductItem} />;
                    <Route path="*" component={NotFound} />;

                </Switch>
            </Router>
        </div>
    )
}

export default RouteConfig;
