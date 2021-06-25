import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { ProductListing } from './components/ShopComponent/ProductListing';
import { ProductDetails } from './components/ShopComponent/ProductDetails';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetails} />
        <Route> Page Not Found </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
