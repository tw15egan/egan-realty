const React = require('react');

// <About />
class About extends React.Component {
  render() {
    const profilePic = require('../../img/DSC06806.jpg');
    return (
      <div className="about">
        <div className="left-content">
          <div className="profile">
            <img src={profilePic} />
          </div>
        </div>
        <div className="right-content">
          <h1>Meet Timothy Egan</h1>
          <h3>Licenses</h3>
          <ul>
            <li>Licensed Real Estate Broker, State of New York</li>
            <li>Licensed Real Estate Appraiser, State of New York</li>
          </ul>
          <h3>Professional Affiliations</h3>
          <ul>
            <li>Schenectady Board of Realtors -- Class B, Broker Member</li>
            <li>New York State Association of Real Estate Boards</li>
            <li>National Association of Real Estate Boards</li>
          </ul>
          <h3>Professional Experience</h3>
          <ul>
            <li>April 1985 - present: Egan Realty and Appraisals Schenectady, N.Y</li>
            <li>April 1986 - November 1993: Armstrong Appraisals, Inc. Schenectady, N.Y Real Estate Appraiser</li>
          </ul>
        </div>
      </div>
    )
  }
};

export default About;
