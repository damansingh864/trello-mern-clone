import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

import './index.css';
import Header from '../src/pages/Home'
import Dashboard from '../src/pages/Dashboard'
import GlobalStyles from './GlobalStyles'
import store from './redux/store'

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  app, document.getElementById('root')
);
