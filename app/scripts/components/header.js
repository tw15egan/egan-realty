const React = require('react');
import Menu from './menu';

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
          <div className="contact-header">
            <a href="tel:518-370-0256" className="contact-header__item contact-header__item--phone">
              <span>(518) 370-0256</span>
            </a>
            <a href="mailto:tw15egan@gmail.com" className="contact-header__item contact-header__item--email">
              <span>eganappr@aol.com</span>
            </a>
          </div>
        </div>
      </header>
    )
  }
};

export default Header;
