import {Component} from "react";

import {ThemeContext, themes} from "./ThemeContext";
import ThemeButton from "./ThemeButton";

function Toolbar(props) {
  return (
    <ThemeButton onClick={props.changeTheme}>Change Theme</ThemeButton>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.light
    }
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={() => this.toggleTheme()}/>
        </ThemeContext.Provider>
      </div>
    )
  }

  toggleTheme() {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    })
  }
}