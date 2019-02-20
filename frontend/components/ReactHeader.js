import React from 'react';

class ReactHeader extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/logo.svg' className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to My React Portfolio</h1>
        </header>
      </div>
    );
  }
}

export default ReactHeader;
