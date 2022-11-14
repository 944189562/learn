import React, {PureComponent} from 'react';
import Home from './pages/Home-redux-saga'
import Profile from "./pages/Profile1";

class App extends PureComponent {
  render() {
    return (
      <div>
        <Home/>
        <hr/>
        <Profile/>
      </div>
    );
  }
}

export default App;