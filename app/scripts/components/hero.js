const React = require('react');
var bg = require('../../img/1.jpeg');
import Form from './form';

// <Hero />
class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <Form />
      </div>
    )
  }
};

export default Hero;
