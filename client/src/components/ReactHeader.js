import React from 'react';
import logo from '../styles/images/logo.svg';
import '../styles/css/index.css';

class ReactHeader extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My React Portfolio</h1>
        </header>
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default ReactHeader;
