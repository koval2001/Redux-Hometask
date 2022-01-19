import React from 'react';
import { render } from 'react-dom';
import ItemList from './ItemList';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
      <ItemList />
  </Provider>
);

render(<App />, document.getElementById('root'));

console.log(store.getState())
