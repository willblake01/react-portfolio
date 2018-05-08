import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <header id="masthead">
    <div className="container">
      <a href="index.html" id="logo">William Blake</a>
      <nav>
        <a href="index.html">About</a>
        <a href="portfolio.html">Portfolio</a>
        <a href="contact.html">Contact</a>
      </nav>
    </div>
  </header>
    );
  }
}

export default Navbar;
