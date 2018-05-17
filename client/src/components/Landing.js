import React from 'react';
import MernLogos from './MernLogos';

class Landing extends React.Component {
  render() {
    return (
      <div className='masthead'>
        <div className='wrapper-landing'>
            <div className='content-landing'>
              <div id='headline'>...and there is a way!</div>
              <MernLogos />
            </div>
        </div>
      </div>
    );
  }
}

export default Landing;
