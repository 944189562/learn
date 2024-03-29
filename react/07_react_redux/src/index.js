import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import {StoreContext} from "./utils/context";
import store from "./store";
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <StoreContext.Provider value={store}>
//     <App/>
//   </StoreContext.Provider>
// )

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
