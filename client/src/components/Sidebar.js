import React from 'react';
import GitHub from '../styles/images/github-128.png';
import LinkedIn from '../styles/images/linkedin-128.png';
import StackOverflow from '../styles/images/stackoverflow-128.png';

class Sidebar extends React.Component {
  render() {
    return (
      <section className='sidebar'>
      <div id='connect'>
        <h2>Connect with Me</h2>

        <a href='https://github.com/WillBlake01' target='_blank'><img src={GitHub} className='social' alt='GitHub' /></a>
        <a href='https://www.linkedin.com/in/william-blake/' target='_blank'><img src={LinkedIn} className='social' alt='LinkedIn' /></a>
        <a href='https://stackoverflow.com/users/8656082/william-blake?tab=profile' target='_blank'><img src={StackOverflow} className='social' alt='Stack Overflow' /></a>
      </div>
    </section>
    );
  }
}

export default Sidebar;
