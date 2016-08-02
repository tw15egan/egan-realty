const React = require('react');
import ContactList from './contact-list.js';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ContactList />
      </footer>
    )
  }
};

export default Footer;
