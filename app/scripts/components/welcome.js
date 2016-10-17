const React = require('react');

// <Welcome />
class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h1 className="big">Are you looking for a licensed real estate appraiser in the Albany region?</h1>
        <p>
          Egan Appraisals, Inc. specializes in residential real estate appraisals, offering quality work with competitive turnaround times and pricing.  Our coverage includes Albany, Saratoga, Schenectady and Rensselaer counties.
        </p>
        <br />
        <p className="green">
          If you have any questions, feel free to <a href="#contact">contact us</a>.
        </p>
        {/* <br /> */}
        {/* <span className="green">Remember - we are your key to reliable service.</span> */}

      </div>
    )
  }
};

export default Welcome;
