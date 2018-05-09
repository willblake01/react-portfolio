import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Landing from './Landing';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Router = () => (
  <Provider store={store}>
    <BrowserRouter store={store}>
      <Switch store={store}>
        <Route store={store} exact path='/' component={Landing} />
        <Route store={store} exact path='/about' component={About} />
        <Route store={store} exact path='/portfolio' component={Portfolio} />
        <Route store={store} exact path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Router;
