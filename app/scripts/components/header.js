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
          <div className="contact">
            <a href="tel:518-370-0256" className="contact__item contact__item--phone">
              <span>(518) 370-0256</span>
            </a>
            <a href="mailto:tw15egan@gmail.com" className="contact__item contact__item--email">
              <span>eganappr@aol.com</span>
            </a>
          </div>
        </div>
      </header>
    )
  }
};

export default Header;
