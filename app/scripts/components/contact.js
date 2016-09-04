const React = require('react');
import Section from './section';
import Form from './form';

const map = require('./../../img/area.png');

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
  
    return (
      <div className="contact">
        <div className="contact__map">
          <img className="map" src={map} />
        </div>
        <div className="contact__form">
          <span>Get in touch</span>
          <Form />
        </div>
      </div>
    )
    
  }
};

export default Contact;
