import React from 'react';
import ReactHeader from '../ReactHeader';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

class Contact extends React.Component {
  render() {
    return (
      <section class="main-section">
        <ReactHeader />
        <Navbar />
        <Sidebar />
        <h1>Contact</h1>
        <form id="contact-form">
          <ul>
            <li>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Smith" required="required" />
            </li>
            <li>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="example@gmail.com" required="required" />
            </li>
            <li>
              <label for="message">Message</label>
              <textarea id="message" name="message" required="required"></textarea>
            </li>
          </ul>
          <input type="submit" />
        </form>
        <Footer />
      </section>
    );
  }
}

export default Contact;
