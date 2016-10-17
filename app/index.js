'use strict';

import Header from './scripts/components/header';
import Content from './scripts/components/content';
import Hero from './scripts/components/hero'

const React = require('react');
const ReactDOM = require('react-dom');

require('./scss/main.scss');

// <App />
class App extends React.Component {
  componentDidMount() {
    const welcome = document.querySelector('.welcome');
    const form = document.querySelector('.form');

    // setTimeout(() => {
    //   welcome.classList.add('popup');
    //   form.classList.add('popup');
    // }, 0);
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
