import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <header id='masthead-navbar'>
        <div className='container'>
          <a href='index.html' id='logo'>William Blake</a>
          <nav>
            <a href='/about'>About</a>
            <a href='/portfolio'>Portfolio</a>
            <a href='/contact'>Contact</a>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
