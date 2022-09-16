import React, { Component } from 'react';

class Child1 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  render() {
    return <div>Slider 1</div>;
  }
}

export default Child1;
