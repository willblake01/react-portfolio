import React from 'react';
import ReactHeader from './ReactHeader';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

class Portfolio extends React.Component {
  render() {
    return <div className='masthead'>
        <ReactHeader />
        <Navbar />
        <div id='main-container' className='container'>
          <section className='main-section'>
            <h1>Portfolio</h1>

          <div className='flex-container'>
            <div className='featured'>
              <a href='https://spectrumtrailracing.com//' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1583682869/react-portfolio/spectrum-trail-racing.png' alt='Spectrum Trail Racing' />
              </a>
              <h3>Spectrum Trail Racing</h3>
            </div>

            <div className='work'>
              <a href='https://range-front.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510166/react-portfolio/range-front.png' alt='Range Front' />
              </a>
              <h3>Range Front</h3>
            </div>

            <div className='work'>
              <a href='https://bit-bay-group.github.io/BitBay/' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510160/react-portfolio/bitbay.png' alt='Bit Bay' />
              </a>
              <h3>BitBay</h3>
            </div>

            <div className='work'>
              <a href='https://memory-client.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1560441472/react-portfolio/memory.png' alt='Memory' />
              </a>
              <h3>Memory</h3>
            </div>

            <div className='work'>
              <a href='https://news-scraper-fullstack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/news-scraper.png' alt='News Scraper' />
              </a>
              <h3>News Scraper</h3>
            </div>

            <div className='work'>
              <a href='https://burger-time-fullstack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510160/react-portfolio/burger-time.png' alt='Burger Time' />
              </a>
              <h3>Burger Time</h3>
            </div>

            <div className='work'>
              <a href='https://friend-finder-full-stack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/friend-finder.png' alt='Friend Finder' />
              </a>
              <h3>Friend Finder</h3>
            </div>

            <div className='work'>
              <a href='https://github.com/willblake01/Bamazon' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510160/react-portfolio/bamazon.png' alt='Bamazon' />
              </a>
              <h3>Bamazon</h3>
            </div>

            <div className='work'>
              <a href='https://github.com/willblake01/liri-bot' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510164/react-portfolio/liri-bot.png' alt='Liribot' />
              </a>
              <h3>LiriBot</h3>
            </div>

            <div className='work'>
              <a href='https://willblake01.github.io/train-time/' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/train-time.png' alt='Train Time' />
              </a>
              <h3>Train Time</h3>
            </div>

            <div className='work'>
              <a href='https://willblake01.github.io/trivia/' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510167/react-portfolio/trivia.png' alt='Trivia' />
              </a>
              <h3>Trivia</h3>
            </div>

            <div className='work'>
              <a href='https://willblake01.github.io/crystal-collector/' target='_blank' rel='noopener noreferrer'>
                <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510161/react-portfolio/crystal-collector.png' alt='Crystal Collector' />
              </a>
              <h3>Crystal Collector</h3>
            </div>

            <div className='work'>
              <a href='https://willblake01.github.io/hangman/' target='_blank' rel='noopener noreferrer'>
              <img src='https://res.cloudinary.com/willblake01/image/upload/v1538510162/react-portfolio/hangman.png' alt='Hangman' />
              </a>
              <h3>Hangman</h3>
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
