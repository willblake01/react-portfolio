import React from 'react';
import facebook from '../styles/images/facebook.svg';
import instagram from '../styles/images/instagram.svg';
import google from '../styles/images/google.svg';
import twitter from '../styles/images/twitter.svg';

const SocialMedia = props => (
    <div className='social-media'>
      <a href='https://www.facebook.com/william.blake.3348' target='_blank'
      rel="noopener noreferrer">
        <img src={facebook} className='social-icon' alt='facebook' />
      </a>
      <a href='https://twitter.com/trill_will' target='_blank' rel="noopener noreferrer">
        <img src={twitter} className='social-icon' alt='twitter' />
      </a>
      <a href='https://www.instagram.com/totes_gnar/' target='_blank' rel="noopener noreferrer">
        <img src={instagram} className='social-icon' alt='instagram' />
      </a>
      <a href='https://plus.google.com/u/0/104700050103420921019' target='_blank'
      rel="noopener noreferrer">
        <img src={google} className='social-icon' alt='google' />
      </a>
    </div>
)

export default SocialMedia;
