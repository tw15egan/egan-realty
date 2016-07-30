const React = require('react');
import Section from './section';
import Form from './form';
import Map from './map';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <Map />
        <div className="contact__form">
          <span>Get in touch</span>
          <Form />
        </div>
      </div>
    )
  }
};

export default Contact;
