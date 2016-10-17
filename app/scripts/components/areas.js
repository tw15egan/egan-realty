const React = require('react');


// <Areas />
class Areas extends React.Component {
  render() {
    const albany = require('../../img/albany.jpg');
    const saratoga = require('../../img/saratoga.jpg');
    const schenectady = require('../../img/schenectady.jpg');
    const troy = require('../../img/troy.jpg');
    const bgAlbany = {
      backgroundImage: `linear-gradient(rgba(10,10,10,0.4), rgba(10,10,10,0.75) 100%), url(${albany})`
    } 
    const bgSaratoga = {
      backgroundImage: `linear-gradient(rgba(10,10,10,0.4), rgba(10,10,10,0.75) 100%), url(${saratoga})`
    } 
    const bgSchenectady = {
      backgroundImage: `linear-gradient(rgba(10,10,10,0.4), rgba(10,10,10,0.75) 100%), url(${schenectady})`
    } 
    const bgTroy = {
      backgroundImage: `linear-gradient(rgba(10,10,10,0.4), rgba(10,10,10,0.75) 100%), url(${troy})`
    } 
    return (
      <div className="areas-banner">

        <ul className="areas">
          <li style={bgAlbany}>Albany</li>
          <li style={bgSaratoga}>Saratoga</li>
          <li style={bgSchenectady}>Schenectady</li>
          <li style={bgTroy}>Rensselaer</li>
        </ul>
      </div>
    )
  }
};

export default Areas;
