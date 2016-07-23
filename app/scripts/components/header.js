const React = require('react');

// <Header />
class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">Egan Realty & Appraisals</h1>
        <div className="contact">
          <a href="tel:518-370-0256" className="contact__phone">(518) 370-0256</a>
          <a href="mailto:tw15egan@gmail.com" className="contact__email">tw15egan@gmail.com</a>
        </div>
      </header>
    )
  }
};

export default Header;
