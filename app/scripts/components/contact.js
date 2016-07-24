const React = require('react');
import Section from './section';
import Form from './form';
import Map from './map';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <Map />
        <Form />
      </div>
    )
  }
};

export default Contact;
