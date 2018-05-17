import React from 'react';
import ReactHeader from './ReactHeader';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import HotSpotr from '../styles/images/hotspotr.png';
import RangeFront from '../styles/images/range-front.png';
import BitBay from '../styles/images/bitbay.png';
import Memory from '../styles/images/hotspotr.png';
import NewsScraper from '../styles/images/hotspotr.png';
import BurgerTime from '../styles/images/hotspotr.png';
import FriendFinder from '../styles/images/friend-finder.png';
import Bamazon from '../styles/images/bamazon.png';
import LiriBot from '../styles/images/liri-bot.png';
import TrainTime from '../styles/images/train-time.png';
import Trivia from '../styles/images/trivia.png';
import CrystalCollector from '../styles/images/crystal-collector.png';
import Hangman from '../styles/images/hangman.png';

class Portfolio extends React.Component {
  render() {
    return (
      <div className='masthead'>
        <ReactHeader />
        <Navbar />
        <div id='main-container' className='container'>
          <section className='main-section'>
            <h1>Portfolio</h1>

            <div className='work'>
              <a href='https://businessplanner.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src={HotSpotr} alt='Hot Spotr' />
              </a>
              <h3>Hot Spotr</h3>
            </div>

            <div className='work'>
              <a href='https://rangefront.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src={RangeFront} alt='Range Front' />
              </a>
              <h3>Range Front</h3>
            </div>

            <div className='work'>
              <a href='https://bit-bay-group.github.io/BitBay/' target='_blank' rel='noopener noreferrer'>
                <img src={BitBay} alt='Bit Bay' />
              </a>
              <h3>BitBay</h3>
            </div>

            <div className='work'>
              <a href='https://burger-time-fullstack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src={Memory} alt='Memory' />
              </a>
              <h3>Memory</h3>
            </div>

            <div className='work'>
              <a href='https://burger-time-fullstack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src={NewsScraper} alt='News Scraper' />
              </a>
              <h3>News Scraper</h3>
            </div>

            <div className='work'>
              <a href='https://burger-time-fullstack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src={BurgerTime} alt='Burger Time' />
              </a>
              <h3>Burger Time</h3>
            </div>

            <div className='work'>
              <a href='https://friend-finder-full-stack.herokuapp.com/' target='_blank' rel='noopener noreferrer'>
                <img src={FriendFinder} alt='Friend Finder' />
              </a>
              <h3>Friend Finder</h3>
            </div>

            <div className='work'>
              <a href='https://github.com/willblake01/Bamazon' target='_blank' rel='noopener noreferrer'>
                <img src={Bamazon} alt='Bamazon' />
              </a>
              <h3>Bamazon</h3>
            </div>

            <div className='work'>
              <a href='https://github.com/willblake01/liri-bot' target='_blank' rel='noopener noreferrer'>
                <img src={LiriBot} alt='Liribot' />
              </a>
              <h3>LiriBot</h3>
            </div>

            <div className='work'>
              <a href='https://willblake01.github.io/train-time/' target='_blank' rel='noopener noreferrer'>
                <img src={TrainTime} alt='Train Time' />
              </a>
              <h3>Train Time</h3>
            </div>

            <div className='work'>
              <a href='https://willblake01.github.io/trivia/' target='_blank' rel='noopener noreferrer'>
                <img src={Trivia} alt='Trivia' />
              </a>
              <h3>Trivia</h3>
            </div>

            <div className='work'>
              <a href='https://willblake01.github.io/crystal-collector/' target='_blank' rel='noopener noreferrer'>
                <img src={CrystalCollector} alt='Crystal Collector' />
              </a>
              <h3>Crystal Collector</h3>
            </div>

            <div className='work'>
              <a href='https://willblake01.github.io/hangman/' target='_blank' rel='noopener noreferrer'>
                <img src={Hangman} alt='Hangman' />
              </a>
              <h3>Hangman</h3>
            </div>
          </section>
          <Sidebar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
