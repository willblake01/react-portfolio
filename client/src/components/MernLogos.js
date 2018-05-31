import React from 'react';
import MongoDbLogo from '../styles/images/mongodb.svg';
import ExpressLogo from '../styles/images/express.svg';
import ReactLogo from '../styles/images/react.svg';
import NodeLogo from '../styles/images/nodejs.svg';
import ReduxLogo from '../styles/images/redux.svg';
import WebPackLogo from '../styles/images/webpack.svg';
import SassLogo from '../styles/images/sass.svg';

const MernLogos = props => (
  <div className='container'>
    <div className='mern-logos'>
      <img src={MongoDbLogo} className='mern-icon' alt='Mango DB' />
      <img src={ExpressLogo} className='mern-icon' alt='Express' />
      <img src={ReactLogo} className='mern-icon' alt='React' />
      <img src={NodeLogo} className='mern-icon' alt='Node' />
      <img src={ReduxLogo} className='mern-icon' alt='Redux' />
      <img src={WebPackLogo} className='mern-icon' alt='Webpack' />
      <img src={SassLogo} className='mern-icon' alt='Sass' />
    </div>
  </div>
)

export default MernLogos;
