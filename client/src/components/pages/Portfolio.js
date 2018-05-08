import React from 'react';
import ReactHeader from '../ReactHeader';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <ReactHeader />
        <Navbar />
        <Sidebar />
        <p>Portfolio</p>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
