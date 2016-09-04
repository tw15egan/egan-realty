const React = require('react');

// <Areas />
class Areas extends React.Component {
  render() {
    return (
      <div className="areas-banner">

        <ul className="areas">
          <li>Albany</li>
          <li>Saratoga</li>
          <li>Schenectady</li>
          <li>Rensselaer</li>
        </ul>
      </div>
    )
  }
};

export default Areas;
