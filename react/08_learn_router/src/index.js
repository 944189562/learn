import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeContext, themes} from "./context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Router>
        {/*<ThemeContext value={themes.dark}>*/}
          <App/>
        {/*</ThemeContext>*/}
      </Router>
    </React.StrictMode>
  // </ThemeContext>
);
