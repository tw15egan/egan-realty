'use strict';

import Header from './scripts/components/header';
import Content from './scripts/components/content';
import Hero from './scripts/components/hero'

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

require('./scss/main.scss');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Navigation = ReactRouter.Navigation;
const History = ReactRouter.History;
const createBrowserHistory = require('history/lib/createBrowserHistory');

const Rebase = require('re-base');



import 'babel-polyfill';

// <App />
class App extends React.Component {
  componentDidMount() {
    const welcome = document.querySelector('.welcome');
    const form = document.querySelector('.form');

    setTimeout(() => {
      welcome.classList.add('popup');
      form.classList.add('popup');
    }, 300);
  }

  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector('#app'));
