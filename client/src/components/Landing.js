import React from 'react';
import MernLogos from './MernLogos';

class Landing extends React.Component {
  render() {
    return (
      <div className='masthead'>
        <div className='wrapper-landing'>
            <div className='content-landing'>
              <div class='copy' id='headline'>...and there is a way!</div>
              <div class='copy' id='about-landing'>Hi, I'm Will. I'm a Full-Stack developer from
              Austin, TX. I focus on MERN stack applications but my knowledge base spans way beyond
              that, just ask!</div>
              <div class='copy' id='learn-more'>Learn more about what I do</div>
              <div class='copy' id='down-arrow'>&or;</div>
            </div>
            <MernLogos />
        </div>
      </div>
    );
  }
}

export default Landing;
