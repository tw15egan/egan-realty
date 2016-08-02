const React = require('react');

// <ContactList />
class ContactList extends React.Component {

  render() {
    return (
      <div className="contact-list">
        <a href="tel:518-370-0256" className="contact-list__item contact-list__item--phone">
          <span>(518) 370-0256</span>
        </a>
        <a href="mailto:tw15egan@gmail.com" className="contact-list__item contact-list__item--email">
          <span>eganappr@aol.com</span>
        </a>
      </div>
    )
  }
};

export default ContactList;
