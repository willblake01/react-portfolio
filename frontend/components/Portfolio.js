import React from 'react';
// import ReactHeader from './ReactHeader';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

class Portfolio extends React.Component {
  render() {
    return <div className='masthead'>
        {/* <ReactHeader /> */}
        <Navbar />
        <div id='main-container' className='container'>
          <section className='main-section'>
            <h1>Portfolio</h1>

            <div className='flex-container'>
              <div className='featured'>
                <a href='https://spectrumtrailracing.com//' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1583682869/react-portfolio/spectrum-trail-racing.png' alt='Spectrum Trail Racing' />
                  <h3>Spectrum Trail Racing</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://range-front.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510166/react-portfolio/range-front.png' alt='Range Front' />
                  <h3>Range Front</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://bit-bay-group.github.io/BitBay/' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510160/react-portfolio/bitbay.png' alt='Bit Bay' />
                  <h3>BitBay</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://memory-client.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1560441472/react-portfolio/memory.png' alt='Memory' />
                  <h3>Memory</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://news-scraper-fullstack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/news-scraper.png' alt='News Scraper' />
                  <h3>News Scraper</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://burger-time-fullstack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510160/react-portfolio/burger-time.png' alt='Burger Time' />
                  <h3>Burger Time</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://friend-finder-full-stack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/friend-finder.png' alt='Friend Finder' />
                  <h3>Friend Finder</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://github.com/willblake01/Bamazon' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510160/react-portfolio/bamazon.png' alt='Bamazon' />
                  <h3>Bamazon</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://github.com/willblake01/liri-bot' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/liri-bot.png' alt='Liribot' />
                  <h3>LiriBot</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://willblake01.github.io/train-time/' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/train-time.png' alt='Train Time' />
                  <h3>Train Time</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://willblake01.github.io/trivia/' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/trivia.png' alt='Trivia' />
                  <h3>Trivia</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://willblake01.github.io/crystal-collector/' target='_blank' rel='noopener noreferrer'>
                  <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510161/react-portfolio/crystal-collector.png' alt='Crystal Collector' />
                  <h3>Crystal Collector</h3>
                </a>
              </div>

              <div className='work'>
                <a href='https://willblake01.github.io/hangman/' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/hangman.png' alt='Hangman' />
                <h3>Hangman</h3>
                </a>
              </div>
            </div>
          </section>
          <Sidebar />
        </div>
        <Footer />
      </div>;
  }
}

export default Portfolio;
