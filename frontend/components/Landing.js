import React from 'react';
import Link from 'next/link';
import MernLogos from './MernLogos';

class Landing extends React.Component {
  render() {
    return (
      <div className='masthead'>
        <div className='wrapper-landing'>
            <div className='content-landing'>
              <div className='copy' id='about-landing'>Hi, I'm Will, a Full-Stack developer
              from Austin, TX. I focus on MERN stack applications but my knowledge base spans way
              beyond that, just ask!</div>
              <Link href='/about'>
                <div className='copy' id='learn-more'>Learn more about what I do</div>
              </Link>
              <div className='copy' id='down-arrow'><a href='/about'>&or;</a></div>
              <MernLogos />
            </div>
        </div>
      </div>
    );
  }
}
export default Landing;
