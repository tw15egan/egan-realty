const React = require('react');
import Section from './section';
import Form from './form';
import Map from './map';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      ready: false
    };
  }
  
  componentDidMount() {
    console.log('mounted');
    this.setState({
      ready: true
    });
  }
  
  render() {
    // console.log(this.state.loading);
    if (this.state.ready) {
      return (
        <div className="contact">
          <Map ready={this.state.ready} />
          <div className="contact__form">
            <span>Get in touch</span>
            <Form />
          </div>
        </div>
      )
    } else {
      return (
        <div className="contact">
          <Map ready={this.state.ready} />
          <div className="contact__form">
            <span>Get in touch</span>
            <Form />
          </div>
        </div>
      )
    }
    
  }
};

export default Contact;
