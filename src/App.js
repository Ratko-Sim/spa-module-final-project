import './App.scss';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import NotFound from "./components/Header/Nav/NotFound"
import Home from "./components/Home/Home"
import { ProductListing } from './components/ShopComponent/ProductListing';
import { ProductDetails } from './components/ShopComponent/ProductDetails';
import ReviewsPage from "./components/Home/ReviewsComponent/ReviewsPage/ReviewsPage"
import { AnimatePresence } from "framer-motion"
import Footer from "./components/Footer/Footer"
import { DiscountedProducts15 } from "./components/ShopComponent/DiscountedProducts15"
import { DiscountedProduct15 } from "./components/ShopComponent/DiscountedProduct15"

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatePresence>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/productlisting" exact component={ProductListing} />
            <Route path="/product/:productId" exact component={ProductDetails} />
            <Route path="/notfound" exact component={NotFound} />
            <Route path="/reviews" exact component={ReviewsPage} />
            <Route path="/discount15" exact component={DiscountedProducts15} />
            <Route path="/product15/:productId" exact component={DiscountedProduct15} />
          </Switch>
        </AnimatePresence>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
