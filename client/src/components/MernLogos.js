import React from 'react';
import MongoDb from '../styles/images/mongodb.svg';
import Express from '../styles/images/express.svg';
import React from '../styles/images/react.svg';
import Node from '../styles/images/nodejs.svg';
import Redux from '../styles/images/redux.svg';
import WebPack from '../styles/images/webpack.svg';
import Sass from '../styles/images/sass.svg';

const MernLogos = props => (
  <div className='mern-logos'>
    <img src={MongoDb} className='mern-icon' alt='Mango DB' />
    <img src={Express} className='mern-icon' alt='Express' />
    <img src={React} className='mern-icon' alt='React' />
    <img src={Node} className='mern-icon' alt='Node' />
    <img src={Redux} className='mern-icon' alt='Redux' />
    <img src={WebPack} className='mern-icon' alt='Webpack' />
    <img src={Sass} className='mern-icon' alt='Sass' />
  </div>
)

export default MernLogos;
