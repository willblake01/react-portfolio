import React from 'react';
import SocialMedia from './SocialMedia';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          Copyright &copy; 2018 William Blake
        </div>
        <SocialMedia />
      </footer>
    );
  }
}

export default Footer;
