import {PureComponent} from "react";

import Header from "./src/header/Header";
import Main from "./src/main/main";
import Footer from "./src/footer/Footer";

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello App~'
    }
  }


  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}