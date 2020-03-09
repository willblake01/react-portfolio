import React from 'react';
import SocialMedia from './SocialMedia';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <SocialMedia />
          Copyright &copy; 2018 William Blake
        </div>
      </footer>
    );
  }
}

export default Footer;
