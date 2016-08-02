const React = require('react');
import ContactList from './contact-list.js';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ContactList />
        <div className="copyright">Copyright <span>&copy;</span> 2016 Egan Appraisals, Inc.</div>
      </footer>
    )
  }
};

export default Footer;
