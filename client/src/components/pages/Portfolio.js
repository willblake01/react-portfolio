import React from 'react';
import ReactHeader from '../ReactHeader';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <ReactHeader />
        <Navbar />
        {/* <Sidebar /> */}
        <div id="main-container" class="container">
          <section class="main-section">
            <h1>Portfolio</h1>

            <div class="work">
              <a href="https://businessplanner.herokuapp.com/" target="_blank">
                <img src="assets/images/hotspotr.png" alt="Hot Spotr" />
              </a>
              <h3>Hot Spotr</h3>
            </div>

            <div class="work">
              <a href="https://rangefront.herokuapp.com/" target="_blank">
                <img src="assets/images/rangefront.png" alt="Range Front" />>
              </a>
              <h3>Range Front</h3>
            </div>

            <div class="work">
              <a href="https://bit-bay-group.github.io/BitBay/" target="_blank">
                <img src="assets/images/bitbay.png" alt="Bit Bay" />
              </a>
              <h3>BitBay</h3>
            </div>

            <div class="work">
              <a href="https://burger-time-fullstack.herokuapp.com/" target="_blank">
                <img src="assets/images/friendfinder.png" alt="Memory" />
              </a>
              <h3>Memory</h3>
            </div>

            <div class="work">
              <a href="https://burger-time-fullstack.herokuapp.com/" target="_blank">
                <img src="assets/images/friendfinder.png" alt="News Scraper" />
              </a>
              <h3>News Scraper</h3>
            </div>

            <div class="work">
              <a href="https://burger-time-fullstack.herokuapp.com/" target="_blank">
                <img src="assets/images/friendfinder.png" alt="Burger Time" />
              </a>
              <h3>Burger Time</h3>
            </div>

            <div class="work">
              <a href="https://friend-finder-full-stack.herokuapp.com/" target="_blank">
                <img src="assets/images/friendfinder.png" alt="Friend Finder" />
              </a>
              <h3>Friend Finder</h3>
            </div>

            <div class="work">
              <a href="https://github.com/WillBlake01/Bamazon" target="_blank">
                <img src="assets/images/bamazon.png" alt="Bamazon" />
              </a>
              <h3>Bamazon</h3>
            </div>

            <div class="work">
              <a href="https://github.com/WillBlake01/Liri-Bot" target="_blank">
                <img src="assets/images/liri.png" alt="Liribot" />
              </a>
              <h3>LiriBot</h3>
            </div>

            <div class="work">
              <a href="https://willblake01.github.io/" target="_blank">
                <img src="assets/images/traintime.png" alt="Train Time" />
              </a>
              <h3>Train Time</h3>
            </div>

            <div class="work">
              <a href="https://willblake01.github.io/TriviaGame/" target="_blank">
                <img src="assets/images/trivia.png" alt="Trivia Game" />
              </a>
              <h3>Trivia Game</h3>
            </div>

            <div class="work">
              <a href="https://willblake01.github.io/Crystal-Collector/" target="_blank">
                <img src="assets/images/crystalcollector.png" alt="Crystal Collector" />
              </a>
              <h3>Crystal Collector</h3>
            </div>

            <div class="work">
              <a href="https://willblake01.github.io/Hangman-Game/" target="_blank">
                <img src="assets/images/hangman.png" alt="Hangman" />
              </a>
              <h3>Hangman</h3>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
