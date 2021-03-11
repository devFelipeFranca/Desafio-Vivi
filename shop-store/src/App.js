import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import store from './store';

import './css/bulma.min.css'

function App() {
  return (  
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/CC">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
