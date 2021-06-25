import './App.scss';
import React from 'react'
import Header from "./components/Header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NotFound from "./components/Header/Nav/NotFound"
import Shop from "./components/ShopComponent/Shop"
import Home from "./components/Home/Home"

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/notfound" exact component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
