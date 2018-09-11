import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';

class App extends Component {
  render() {
    const navType = [
      {
          text: "Login",
          to: "/Login"
      },
  ];
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <NavBar links={ navType }/>
        <p>Routing Practice</p>
      </div>
    );
  }
}

export default App;
