import React from 'react';
import ReactHeader from '../ReactHeader';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import ProfilePic from '../ProfilePic';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <ReactHeader />
        <Navbar />
        <Sidebar />
				<h1>About Me</h1>
        <ProfilePic />
				<p class='bio'>	William Blake is a Web Developer with 12 years of experience in Business
				Administration. He was born and raised in Austin, TX but enjoys traveling and the great
				diversity of the United States. He holds a Full-Stack Web Developer certification from The
				University of Texas and received a BBA in Finance from Texas State University in 2006. He
				most enjoyed his time working for an Entrepreneur running two web stores, which furthered
				his passion for technology and design. He was able to marry skills in coding, graphics
				editing, Management, Finance, and Business Administration. The demand to approach issues
				from different perspectives and wear many hats at a small business quenched his thirst as an
				ENTP, which rarely pass up the opportunity to learn something new. It was during his time
				there he decided to take the necessary steps to switch careers to a more fulfilling and
				dynamic field.</p>
			<br />
				<p class='bio'>When he isn’t making computers dance, he spends time playing guitar, learning
				Spanish, running marathons, and trying not to fall down on the soccer field. He is currently
				working on coding a website to showcase his many hobbies. You can reach him at
				willblakebooking@gmail.com or on Twitter at @trill_will.</p>
        <Footer />
      </div>
    );
  }
}

export default AboutMe;
