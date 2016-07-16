import React, { Component } from 'react';
import Hello from './components/hello.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {greeting:'npm'};
  }

  render() {
    return (
      <div>
        <Hello greet={this.state.greeting} />
      </div>
    )
  }
}

export default App;