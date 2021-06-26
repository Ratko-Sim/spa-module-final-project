import './App.scss';
import React from 'react'
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NotFound from "./components/Header/Nav/NotFound"
import Shop from "./components/ShopComponent/Shop"
import Home from "./components/Home/Home"
import ReviewsPage from "./components/Home/ReviewsComponent/ReviewsPage/ReviewsPage"

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/notfound" exact component={NotFound} />
          <Route path="/reviews" exact component={ReviewsPage} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
