const React = require('react');
import Menu from './menu';
import ContactList from './contact-list.js';

// <Header />
class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <h1 className="header__title">
          <span className="header__title--name">EGAN</span>
          <span className="header__title--tag">Realty & Appraisals</span>
        </h1>
        <div className="right-content">
          <Menu />
          <ContactList />
        </div>
      </header>
    )
  }
};

export default Header;
