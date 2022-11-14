import React, {memo} from "react";
import {Provider} from "react-redux";

import store from "./state";

const App = memo(() => {
  return (
    <Provider store={store}>
      <header className="App-header">
        <h1>TodoList</h1>
      </header>
    </Provider>
  );
})

export default App;
