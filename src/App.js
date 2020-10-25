import React from 'react';
import './App.css';
import UserContainer from './Components/UserContainer';
import {Provider} from 'react-redux'
import store from './Components/store'
function App() {

  return (
    <div>
      <Provider store={store}>
        <UserContainer></UserContainer>

      </Provider>
    </div>
  );
}

export default App;
