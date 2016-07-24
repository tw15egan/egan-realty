const React = require('react');
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
