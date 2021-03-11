import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Cart from './pages/Cart';

import store from './store';

import './styles/bulma.min.css';
import './styles/searchGroup.css';

function App() {
  return (  
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products_cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
