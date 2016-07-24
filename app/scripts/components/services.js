const React = require('react');

// <Services />
class Services extends React.Component {

  render() {
    const residential = require('../../img/house.svg');
    const investment = require('../../img/money-1.svg');
    const land = require('../../img/mountain.svg');
    const estate = require('../../img/houses.svg');
    const staff = require('../../img/money.svg');

    return (
      <div className="services">
        <ul>
          <li>
            <img className="icon" src={residential} />
            <h2>Residential</h2>
          </li>
          <li>
            <img className="icon" src={investment} />
            <h2>Investment</h2>
          </li>
          <li>
            <img className="icon" src={land} />
            <h2>Land</h2>
          </li>
          <li>
            <img className="icon" src={estate} />
            <h2>Estate</h2>
          </li>
          <li>
            <img className="icon" src={staff} />
            <h2>Full-time appraiser on permanent staff</h2>
          </li>
        </ul>
      </div>
    )
  }
};

export default Services;
