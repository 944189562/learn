import React, {PureComponent, useContext} from 'react';
import {ThemeContext, themes} from "../context";

class About extends PureComponent {
  static context = ThemeContext

  render() {
    return (
      <>
        <ThemeContext.Provider value={themes.dark}>
          <Profile/>
          <UseProfile/>
        </ThemeContext.Provider>
        <Profile1/>
        <UseProfile/>
      </>

    )
  }
}

function Profile(props) {
  return (
    <ThemeContext.Consumer>
      {
        value => (
          <p style={value}>Profile</p>
        )
      }
    </ThemeContext.Consumer>
  )
}

class Profile1 extends PureComponent {
  render() {
    console.log(this.context)
    return (
      <ThemeContext.Consumer>
        {
          value => (
            <p style={value}>Profile</p>
          )
        }
      </ThemeContext.Consumer>
    )
  }
}

function UseProfile(props) {
  const value = useContext(ThemeContext)
  return (
    <p style={value}>UseContext</p>
  )
}

Profile1.contextType = ThemeContext

export default About;