const React = require('react');

// <Introduction />
class Introduction extends React.Component {
  render() {
    return (
      <div className="intro">
        <h2>Your Key to Reliable Service</h2>
        <h3>Specializing in Residential and Commercial Appraisals</h3>
        <h4>Appraisal Services</h4>
        <ul>
          <li>Residential</li>
          <li>Investment</li>
          <li>Land</li>
          <li>Estate</li>
          <li>Full-time appraiser on permanent staff</li>
        </ul>
      </div>
    )
  }
};

export default Introduction;
