import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './Components/index'
import {PersistGate} from 'redux-persist/integration/react'
import {store} from './Components/store'
import {Provider} from 'react-redux'
import {persistor} from './Components/store'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Cart from './Components/cart'
import keyboards from './Components/keyboards'
import mouses from './Components/mouses'
import favorites from './Components/favorites'
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor ={persistor}> 
        <Router>
          <Switch>
              <Route exact path='/Home' component={Index}></Route>
              <Route path='/cart' component={Cart}></Route>
              <Route path='/keyboards' component={keyboards}></Route>
              <Route path='/mouses' component={mouses}></Route>
              <Route path='/wishList' component={favorites}></Route>


          </Switch>     
        </Router>
        </PersistGate>
      </Provider>

    </div>
  );
}

export default App;
