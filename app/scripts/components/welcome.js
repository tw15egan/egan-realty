const React = require('react');

// <Welcome />
class Welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
          <h1 className="big">We at Egan Appraisals are happy to welcome you to the Capital Region.</h1>
          <p>
             Whether you are new to the area or relocating within the Capital region, our professionally trained brokers and sales associates
             are here to meet the customer's needs with personal and professional service.
             <br />
             <span className="green">Remember - we are your key to reliable service.</span>
          </p>
      </div>
    )
  }
};

export default Welcome;
