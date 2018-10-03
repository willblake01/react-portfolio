import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <section className='sidebar'>
      <div id='connect'>
          <h2>Connect with Me</h2>
          <a href='https://github.com/willblake01' target='_blank' rel='noopener noreferrer'>
            <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/github-128.png' className='social' alt='GitHub' />
          </a>
          <a href='https://www.linkedin.com/in/william-blake/' target='_blank'
          rel='noopener noreferrer'>
            <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510163/react-portfolio/linkedin-128.png' className='social' alt='LinkedIn' />
          </a>
          <a href='https://stackoverflow.com/users/8656082/william-blake?tab=profile'
          target='_blank' rel='noopener noreferrer'>
            <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/stackoverflow-128.png' className='social' alt='Stack Overflow' />
          </a>
        </div>
    </section>
    );
  }
}

export default Sidebar;
