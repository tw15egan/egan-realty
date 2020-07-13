const React = require('react');
import Form from './form';

// <Hero />
class Hero extends React.Component {
  render() {
    const bg = require('../../img/6.jpg');
    const bgStyles = {
      backgroundImage: `linear-gradient(rgba(10,10,10,0.9), rgba(10,10,10,0.55) 100%), url(${bg})`,
    };

    return (
      <div className="hero" style={bgStyles}>
        <h1 className="big">
          Are you looking for a certified real estate appraiser in the Albany
          region?
        </h1>
        <p>
          Egan Appraisals, Inc. specializes in residential real estate
          appraisals, offering quality work with competitive turnaround times
          and pricing. Our coverage includes Albany, Saratoga, Schenectady and
          Rensselaer counties.
        </p>
        <br />
        <p className="contact-us">
          If you have any questions, feel free to{' '}
          <a href="#contact">contact us</a>.
        </p>

        <p className="fair-housing">
          <a href="https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf">
            Fair Housing Notice
          </a>
        </p>
        {/* <Form /> */}
      </div>
    );
  }
}

export default Hero;
