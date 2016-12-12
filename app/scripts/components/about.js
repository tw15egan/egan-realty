const React = require('react');

// <About />
class About extends React.Component {
  render() {
    const profilePic = require('../../img/tim.jpg');
    return (
      <div className="about">
        <div className="left-content">
          <div className="profile">
            <img src={profilePic} />
          </div>
        </div>
        <div className="right-content">
          <h1>Meet Timothy Egan</h1>
          <h3>Licenses & Certifications</h3>
          <ul>
            <li>Certified Residential Real Estate Appraiser, State of New York</li>
            <li>Licensed Real Estate Broker, State of New York</li>
          </ul>
          <h3>Professional Experience</h3>
          <ul>
            <li>December 1993 - Present: Egan Appraisals, Inc., Latham, NY</li>
            <li>April 1985 - December 1993: Egan Realty and Appraisals, Schenectady, NY</li>
            <li>April 1986 - November 1993: Armstrong Appraisals Inc., Schenectady, NY</li>
          </ul>
        </div>
      </div>
    )
  }
};

export default About;
