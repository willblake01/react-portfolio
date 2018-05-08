import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <section class="sidebar">
      <div id="connect">
        <h2>Connect with Me</h2>

        <a href="https://github.com/WillBlake01"><img src="assets/images/github-128.png" className="social" alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/william-blake/"><img src="assets/images/linkedin-128.png" className="social" alt="LinkedIn" /></a>
        <a href="https://stackoverflow.com/users/8656082/william-blake?tab=profile"><img src="assets/images/stackoverflow-128.png" className="social" alt="Stack Overflow" /></a>
      </div>
    </section>
    );
  }
}

export default Sidebar;
