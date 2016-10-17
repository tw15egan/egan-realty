const React = require('react');
import Form from './form';

// <Hero />
class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <h1 className="big">Are you looking for a licensed real estate appraiser in the Albany region?</h1>
        <p>
          Egan Appraisals, Inc. specializes in residential real estate appraisals, offering quality work with competitive turnaround times and pricing.  Our coverage includes Albany, Saratoga, Schenectady and Rensselaer counties.
        </p>
        <br />
        <p className="contact-us">
          If you have any questions, feel free to <a href="#contact">contact us</a>.
        </p>
        {/* <Form /> */}
      </div>
    )
  }
};

export default Hero;
