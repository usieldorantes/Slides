import React, { Component } from 'react';
import { render } from 'react-dom';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      shchild1: true,
      shchild2: false,
      shchild3: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case 'shchild1':
        this.setState({ shchild1: (this.state.shchild1 = true) });
        this.setState({ shchild2: (this.state.shchild1 = false) });
        this.setState({ shchild3: (this.state.shchild1 = false) });
        break;
      case 'shchild2':
        if (this.state.shchild1 == true) {
          this.setState({ shchild1: !this.state.shchild1 });
          this.setState({ shchild2: !this.state.shchild2 });
        }
        if (this.state.shchild2 == true) {
          this.setState({ shchild2: !this.state.shchild2 });
          this.setState({ shchild3: !this.state.shchild3 });
        }
        break;
      case 'shchild3':
        if (this.state.shchild3 == true) {
          this.setState({ shchild3: !this.state.shchild3 });
          this.setState({ shchild2: !this.state.shchild2 });
        }
        if (this.state.shchild2 == true) {
          this.setState({ shchild2: !this.state.shchild2 });
          this.setState({ shchild1: !this.state.shchild1 });
        }
        break;
      default:
        return;
    }
  }

  render() {
    const { shchild1, shchild2, shchild3 } = this.state;
    return (
      <div>
        {shchild1 && <Child1 />}
        <hr />
        {shchild2 && <Child2 />}
        <hr />
        {shchild3 && <Child3 />}
        <hr />
        <div>
          <button
            onClick={() => this.hideComponent('shchild1')}
            disabled={shchild1 === true}
          >
            Reiniciar
          </button>
          <button
            onClick={() => this.hideComponent('shchild2')}
            disabled={shchild3 === true}
          >
            siguiente
          </button>
          <button onClick={() => this.hideComponent('shchild3')}>
            anterior
          </button>
        </div>
      </div>
    );
  }
}

export default App;
