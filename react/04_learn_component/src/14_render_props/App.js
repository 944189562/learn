import React, { PureComponent } from "react";

class Cat extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      x: props.mouse.x,
      y: props.mouse.y,
    };
  }

  componentDidUpdate (newProps) {
    const {
      mouse: { x, y },
    } = newProps;

    this.setState({
      x,
      y,
    });
  }

  render() {
    const { x, y } = this.state;

    return (
      <img
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        style={{ position: "absolute", left: x, top: y }}
      />
    );
  }
}

class MouseTracker extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div
        style={{ height: "100vh" }}
        onMouseMove={(e) => this.handleMouseMove(e)}
      >
        <h1>移動鼠標</h1>
        <p>
          當前鼠標位置：（{this.state.x}, {this.state.y}）
        </p>
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default class App extends PureComponent {
  render() {
    return <MouseTracker render={(mouse) => <Cat mouse={mouse} />} />;
  }
}
